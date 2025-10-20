import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Globe } from "../../components/magicui/globe";
import { PiSwapFill } from "react-icons/pi";
import { Highlighter } from "../../components/magicui/highlighter";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});

  // Input validation
  const validateForm = () => {
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input blur for immediate validation feedback
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validateForm();
  };

  const handleInputChange = (field, value) => {
    setLoginData({ ...loginData, [field]: value });

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      password: true,
    });

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    // Simulate successful login
    toast.success("Welcome back!");
    setTimeout(() => {
      navigate("/"); // redirect after login
    }, 1000);

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 ">
      <div className="border border-gray-800 flex flex-col lg:flex-row w-full max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden">
        {/* IMAGE SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <Globe />
            </div>

            <div className="text-center space-y-4  leading-[42px]">
              <h2 className="text-[35px] font-barlow font-semibold text-gray-100">
                <Highlighter action="highlight" color="#87CEFA">
                  Connect
                </Highlighter>{" "}
                with{" "}
                <Highlighter action="underline" color="#FF9800">
                  Skilled
                </Highlighter>{" "}
                partners worldwide
              </h2>
            </div>
          </div>
        </div>
        {/* LOGIN FORM SECTION */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-6 flex items-center justify-start gap-2">
            <PiSwapFill size={50} className="text-green-600 " />
            <span className="md:text-[50px] text-[40px] font-extrabold bg-clip-text text-green-600 tracking-wider">
              SKILLSWAP
            </span>
          </div>

          <div className="w-full">
            <form onSubmit={handleLogin} noValidate>
              <div
                className="spaceразделение:
-y-5"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-gray-100">
                    Welcome Back
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Sign in to your account to continue your journey
                  </p>
                </div>

                <div className="space-y-4">
                  {/* EMAIL */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-transparent text-gray-100 ${
                        errors.email && touched.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-600 focus:outline-none"
                      } focus:outline-none `}
                      value={loginData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      onBlur={() => handleBlur("email")}
                      disabled={loading}
                      required
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* PASSWORD */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={`w-full px-4 py-2.5 rounded-lg border bg-transparent text-gray-100 pr-10 ${
                          errors.password && touched.password
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-600 focus:outline-none"
                        } focus:outline-none `}
                        value={loginData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        onBlur={() => handleBlur("password")}
                        disabled={loading}
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex="-1"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    {errors.password && touched.password && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* FORGOT PASSWORD LINK */}
                  <div className="text-right">
                    <Link
                      to="/forgot-password"
                      className="text-sm text-green-400 hover:text-green-300 font-medium"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  {/* LOGIN BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-300 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 focus:outline-none  disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing in...
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  <div className="text-center mt-4 pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-300">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-green-400 hover:text-green-300 font-medium hover:underline"
                      >
                        Create one
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
