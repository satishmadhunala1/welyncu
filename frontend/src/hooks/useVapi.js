"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Vapi from "@vapi-ai/web";
import { configureAssistant } from "../lib/utils";

const useVapi = (publicKey, companion) => {
  const vapiRef = useRef(null);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initVapi = useCallback(() => {
    if (!vapiRef.current && publicKey && companion) {
      try {
        const vapi = new Vapi(publicKey);
        vapiRef.current = vapi;

        vapi.on("call-start", () => {
          setIsSessionActive(true);
          setIsLoading(false);
          setError(null);
        });
        
        vapi.on("call-end", () => {
          setIsSessionActive(false);
          setIsLoading(false);
        });
        
        vapi.on("error", (error) => {
          console.error("Vapi error:", error);
          setError(error.error?.message || error.message || "An error occurred");
          setIsLoading(false);
        });
        
        vapi.on("message", (msg) => {
          if (msg.type === "transcript" && msg.transcriptType === "final") {
            setConversation((prev) => [
              ...prev,
              { role: msg.role, text: msg.transcript },
            ]);
          }
        });

      } catch (err) {
        console.error("Error initializing Vapi:", err);
        setError(err.message || "Failed to initialize Vapi");
      }
    }
  }, [publicKey, companion]);

  useEffect(() => {
    initVapi();
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop()?.catch(console.error);
        vapiRef.current = null;
      }
    };
  }, [initVapi]);

  const toggleCall = async () => {
    if (!vapiRef.current || !companion) {
      setError("Vapi not initialized or no companion data");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (isSessionActive) {
        await vapiRef.current.stop();
      } else {
        // Configure the assistant dynamically based on companion
        const assistantConfig = configureAssistant(companion);
        await vapiRef.current.start(assistantConfig);
      }
    } catch (err) {
      console.error("Error toggling call:", err);
      setError(err.error?.message || err.message || "Failed to toggle call");
      setIsLoading(false);
    }
  };

  return { isSessionActive, conversation, toggleCall, isLoading, error };
};

export default useVapi;