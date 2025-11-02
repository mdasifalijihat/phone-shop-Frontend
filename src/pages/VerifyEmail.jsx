import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const VerifyEmail = () => {
  const { token } = useParams();
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/user/verify/${token}`
        );

        if (res.data.success) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error("Verification Error:", error.response?.data || error.message);
        setStatus("failed");
      }
    };

    verifyUser();
  }, [token]);

  const renderContent = () => {
    switch (status) {
      case "verifying":
        return (
          <>
            <Loader2 className="w-12 h-12 text-pink-500 animate-spin mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">
              Verifying your email...
            </h2>
            <p className="text-gray-500">Please wait a moment.</p>
          </>
        );

      case "success":
        return (
          <>
            <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
            <h2 className="text-xl font-bold text-gray-800">Email Verified 🎉</h2>
            <p className="text-gray-600 mb-4">
              Your email has been successfully verified.
            </p>
            <a
              href="/login"
              className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Go to Login
            </a>
          </>
        );

      case "failed":
        return (
          <>
            <XCircle className="w-12 h-12 text-red-500 mb-4" />
            <h2 className="text-xl font-bold text-gray-800">Verification Failed ❌</h2>
            <p className="text-gray-600 mb-4">
              Invalid or expired token. Please try again.
            </p>
            <a
              href="/signup"
              className="bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Back to Signup
            </a>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-pink-200">
        {renderContent()}
      </div>
    </div>
  );
};

export default VerifyEmail;
