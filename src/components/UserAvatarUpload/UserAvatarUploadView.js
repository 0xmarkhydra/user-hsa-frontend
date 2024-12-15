import Image from "next/image";
import React from "react";

const UserAvatarUploadView = ({ userInfo }) => {
  return (
    <div className="bg-gray-100 border relative border-gray-300 rounded-lg w-full aspect-square flex items-center justify-center mb-4 cursor-pointer">
      {userInfo?.avatar && (
        <Image layout="fill" src={userInfo?.avatar} alt="user avatar" />
      )}

      <label
        htmlFor="avatarUpload"
        className="flex flex-col items-center justify-center w-full h-full text-gray-500 cursor-pointer absolute z-10 top-0 left-0"
      >
        <input
          id="avatarUpload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              console.log("Selected file:", file);
            }
          }}
        />
        {!userInfo?.avatar && <span>Thay đổi ảnh đại diện</span>}
      </label>
    </div>
  );
};

export default UserAvatarUploadView;
