import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200">
      <img
        src="https://pbs.twimg.com/profile_images/1447826647281983491/LRfTqL6b_400x400.jpg"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Recep Terzi</span>
        <span className="text-sm text-gray-dark">@Recep_Terzi_67</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
};

export default UserBox;
