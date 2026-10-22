import React from "react";

const UserCard = ({ user }) => {
  const fullName = `${user?.name?.firstname || ""} ${
    user?.name?.lastname || ""
  }`;

  const initials = `${user?.name?.firstname?.[0] || ""}${
    user?.name?.lastname?.[0] || ""
  }`.toUpperCase();

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Top Section */}
      <div className="h-28 .bg-gradient-to-r from-blue-600 to-indigo-600"></div>

      {/* Profile */}
      <div className="relative px-6 pb-6">
        
        {/* Avatar */}
        <div className="-mt-12 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-2xl font-bold uppercase text-blue-700 shadow-lg">
            {initials}
          </div>
        </div>

        {/* Name */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold capitalize text-gray-800">
            {fullName}
          </h2>

          <p className="mt-1 text-sm text-blue-600">
            @{user?.username}
          </p>
        </div>

        {/* User Details */}
        <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              ✉
            </div>

            <div className="min-w-0">
              <p className="text-xs text-gray-400">Email</p>
              <p className="truncate text-sm font-medium text-gray-700">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              ☎
            </div>

            <div>
              <p className="text-xs text-gray-400">Phone</p>
              <p className="text-sm font-medium text-gray-700">
                {user?.phone}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              📍
            </div>

            <div className="min-w-0">
              <p className="text-xs text-gray-400">Address</p>

              <p className="truncate text-sm font-medium capitalize text-gray-700">
                {user?.address?.city}, {user?.address?.street}
              </p>
            </div>
          </div>

        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;