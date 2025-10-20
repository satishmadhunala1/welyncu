import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



export const voices = {
  male: {
    friendly: "1SM7GgM6IMuvQlz2BwM3",
    formal: "mZ8K1MPRiT5wDQaasg3i",
  },
  female: {
    friendly: "TbMNBJ27fH2U0VgpSNko",
    formal: "O4cGUVdAocn0z4EpQ9yF",

  },
};

export const configureAssistant = (companion) => {
const voiceId = voices[companion.voice]?.[companion.style];

const systemPrompt = `You are ${companion.name}, a ${companion.subject} expert tutor.
Your teaching focus: ${companion.teach}
Your communication style: ${companion.style}
Your language: ${companion.language}

Tutor Guidelines:
- Teach the student about ${companion.subject} with focus on ${companion.teach}
- Keep your style ${companion.style} and conversation natural
- Break down complex topics into understandable parts
- Check for understanding periodically
- Keep responses concise for voice conversation
- Speak in ${companion.language} language
- Never use markdown or special characters in responses`;

  const firstMessage = `Hello! I'm ${companion.name}, your ${companion.subject} companion. I'm here to help you learn about ${companion.teach}. What would you like to start with today?`;

  return {
    name: companion.name,
    firstMessage,
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language:
        companion.language?.toLowerCase() === "hindi"
          ? "hi"
          : companion.language?.toLowerCase() === "telugu"
          ? "te"
          : "en",
    },
    voice: {
      provider: "11labs",
      voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      temperature: 0.7,
      systemPrompt, 
    },
  };
};

