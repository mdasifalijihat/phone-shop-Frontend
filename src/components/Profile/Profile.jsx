import React from "react";
import { useSelector } from "react-redux";
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.user);

  if (!userInfo) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <p className="text-gray-700 text-lg font-medium bg-white px-6 py-4 rounded-xl shadow">
          Please login to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex justify-center items-center px-4 py-10">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl w-full max-w-lg p-8 border border-pink-100">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center">
          <img
            src={userInfo.avatar || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            alt="avatar"
            className="w-32 h-32 rounded-full border-4 border-pink-400 shadow-lg object-cover"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800 flex items-center gap-2">
            <User className="text-pink-500 w-6 h-6" /> {userInfo.firstName} {userInfo.lastName}
          </h2>
          <p className="text-gray-500 text-sm">Joined: {userInfo.createdAt?.slice(0, 10)}</p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200" />

        {/* Info Section */}
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="text-pink-500 w-5 h-5" />
            <span>{userInfo.email}</span>
          </div>

          {userInfo.phone && (
            <div className="flex items-center gap-3">
              <Phone className="text-pink-500 w-5 h-5" />
              <span>{userInfo.phone}</span>
            </div>
          )}

          {userInfo.address && (
            <div className="flex items-center gap-3">
              <MapPin className="text-pink-500 w-5 h-5" />
              <span>{userInfo.address}</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Calendar className="text-pink-500 w-5 h-5" />
            <span>Account created on {new Date(userInfo.createdAt).toDateString()}</span>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-8 flex justify-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl font-medium shadow">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
