import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Globe } from '../../components/magicui/globe';
import { PiSwapFill } from "react-icons/pi";
import { Highlighter } from '../../components/magicui/highlighter';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [touched, setTouched] = useState({});

  // Password strength calculator
  useEffect(() => {
    const calculatePasswordStrength = (password) => {
      let strength = 0;
      if (password.length >= 8) strength += 1;
      if (/[A-Z]/.test(password)) strength += 1;
      if (/[0-9]/.test(password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(password)) strength += 1;
      return strength;
    };

    setPasswordStrength(calculatePasswordStrength(signupData.password));
  }, [signupData.password]);

  // Input validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!signupData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (signupData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }
    
    if (!signupData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!signupData.password) {
      newErrors.password = 'Password is required';
    } else if (signupData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!acceptedTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input blur for immediate validation feedback
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validateForm();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      password: true,
      terms: true
    });
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setLoading(true);
    
    // Simulate successful signup
    toast.success('Account created successfully!');
    setTimeout(() => {
      navigate('/login');
    }, 1500);
    
    setLoading(false);
  };

  const handleInputChange = (field, value) => {

setSignupData({ ...signupData, [field]: value });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const passwordRequirements = [
    { id: 1, text: 'At least 8 characters', met: signupData.password.length >= 8 },
    { id: 2, text: 'Contains an uppercase letter', met: /[A-Z]/.test(signupData.password) },
    { id: 3, text: 'Contains a number', met: /[0-9]/.test(signupData.password) },
    { id: 4, text: 'Contains a special character', met: /[^A-Za-z0-9]/.test(signupData.password) },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 ">
      <div className="border border-gray-800 flex flex-col lg:flex-row w-full max-w-5xl mx-auto  rounded-xl shadow-2xl overflow-hidden">
        {/* SIGNUP FORM - LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-6 flex items-center justify-start gap-2">
            <PiSwapFill size={50} className='text-green-600'/>
            <span className="text-[50px] font-extrabold bg-clip-text text-green-600 tracking-wider">
              SKILLSWAP
            </span>
          </div>

          <div className="w-full">
            <form onSubmit={handleSignup} noValidate>
              <div className="space-y-5">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-100">Create an Account</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Join our community and start your learning adventure!
                  </p>
                </div>

                <div className="space-y-4">
                  {/* FULLNAME */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-transparent text-gray-100 ${errors.fullName && touched.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:outline-none'} focus:outline-none `}
                      value={signupData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      onBlur={() => handleBlur('fullName')}
                      disabled={loading}
                      required
                    />
                    {errors.fullName && touched.fullName && (
                      <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                    )}
                  </div>
                  
                  {/* EMAIL */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@gmail.com"
                      className={`w-full px-4 py-2.5 rounded-lg border  bg-transparent text-gray-100 ${errors.email && touched.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:outline-none'} focus:outline-none`}
                      value={signupData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      disabled={loading}
                      required
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
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
                        placeholder="Enter your password"
                        className={`w-full px-4 py-2.5 rounded-lg border  bg-transparent text-gray-100 pr-10 ${errors.password && touched.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:outline-none'} focus:outline-none `}
                        value={signupData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        onBlur={() => handleBlur('password')}
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
                      <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                    )}
                    
                    {/* Password Strength Meter */}
                    {signupData.password && (
                      <div className="mt-2">
                        <div className="flex mb-1">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className={`h-1.5 flex-1 rounded mx-0.5 ${
                                i <= passwordStrength
                                  ? passwordStrength === 1
                                    ? 'bg-red-500'
                                    : passwordStrength === 2
                                    ? 'bg-yellow-500'
                                    : passwordStrength >= 3
                                    ? 'bg-green-400'
                                    : 'bg-gray-600'
                                  : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-400">
                          {passwordStrength === 0 && 'Very weak'}
                          {passwordStrength === 1 && 'Weak'}
                          {passwordStrength === 2 && 'Fair'}
                          {passwordStrength === 3 && 'Good'}
                          {passwordStrength === 4 && 'Strong'}
                        </p>
                        
                        {/* Password Requirements */}
                        <div className="mt-2 space-y-1">
                          {passwordRequirements.map(req => (
                            <div key={req.id} className="flex items-center text-xs">
                              {req.met ? (
                                <CheckCircle className="h-3.5 w-3.5 text-green-400 mr-1.5" />
                              ) : (
                                <XCircle className="h-3.5 w-3.5 text-gray-500 mr-1.5" />
                              )}
                              <span className={req.met ? 'text-green-400' : 'text-gray-400'}>{req.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* TERMS AND CONDITIONS */}
                  <div className="w-full">
                    <label className="flex items-start gap-3">
                      <input 
                        type="checkbox" 
                        className={`mt-1 h-4 w-4 rounded ${errors.terms && touched.terms ? 'border-red-500 text-red-500 focus:ring-red-500' : 'border-gray-600 text-green-400 focus:ring-green-400'} focus:ring-2`} 
                        checked={acceptedTerms}
                        onChange={(e) => {
                          setAcceptedTerms(e.target.checked);
                          if (errors.terms) {
                            setErrors({...errors, terms: null});
                          }
                        }}
                        disabled={loading}
                      />
                      <span className="text-sm text-gray-300 leading-tight">
                        I agree to the{" "}
                        <a href="/terms" className="text-green-400 hover:text-green-300 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                          terms of service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-green-400 hover:text-green-300 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                          privacy policy
                        </a>
                      </span>
                    </label>
                    {errors.terms && touched.terms && (
                      <p className="mt-1 text-sm text-red-400">{errors.terms}</p>
                    )}
                  </div>
                </div>

                <button 
                  className="w-full bg-green-600 hover:bg-green-300 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none  disabled:opacity-70 disabled:cursor-not-allowed mt-2" 
                  type="submit" 
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="text-center mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-300">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-400 hover:text-green-300 font-medium hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}
        <div className="hidden lg:flex w-full lg:w-1/2   justify-center p-8">
          <div className="max-w-md">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <Globe />
            </div>

              <div className="">
              <h2 className="text-[35px] text-center font-barlow font-extrabold text-gray-100 leading-[42px]">
  <Highlighter action="highlight" color="#87CEFA">
    Exchange
  </Highlighter>{" "}
  Your{" "}
  <Highlighter action="underline" color="#FF9800">
    Skills
  </Highlighter>{" "}
  Around The World
</h2>

            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;