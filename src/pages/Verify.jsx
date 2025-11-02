import React, { useState } from "react";
import axios from "axios";
import { MailCheck, Loader2, CheckCircle, XCircle } from "lucide-react";

const Verify = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // success / error

  const handleResend = async () => {
    setLoading(true);
    setMessage("");
    setStatus("");

    try {
      // তুমি চাইলে user-এর email localStorage থেকে নিতে পারো:
      const email = localStorage.getItem("email");

      if (!email) {
        setStatus("error");
        setMessage("Email not found! Please sign up again.");
        setLoading(false);
        return;
      }

      const res = await axios.post("http://localhost:8000/api/v1/user/reverify", {
        email,
      });

      if (res.data.success) {
        setStatus("success");
        setMessage("Verification email has been resent successfully!");
      } else {
        setStatus("error");
        setMessage(res.data.message || "Failed to resend email.");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error.response?.data?.message || "Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-4">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-pink-200">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full shadow-inner">
            <MailCheck className="w-10 h-10 text-green-500" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Check Your Email ✉️
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We’ve sent a verification link to your email address. <br />
          Please check your inbox and click the link to verify your account.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => window.open("https://mail.google.com", "_blank")}
            className="w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition-all shadow-sm hover:shadow-md"
          >
            Open Email App
          </button>

          <button
            onClick={handleResend}
            disabled={loading}
            className="text-pink-500 hover:underline text-sm font-medium flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Resending...
              </>
            ) : (
              "Didn’t receive the email? Resend"
            )}
          </button>
        </div>

        {/* Status Message */}
        {message && (
          <div
            className={`mt-5 flex items-center justify-center gap-2 text-sm font-medium ${
              status === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {status === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <XCircle className="w-5 h-5" />
            )}
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
