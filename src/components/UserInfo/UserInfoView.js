import React from "react";
import HeaderView from "../Layout/Header/HeaderView";
import SideBarLeftView from "../Layout/SideBarLeft/SideBarLeftView";
import FooterView from "../Layout/Footer/FooterView";
import MenuTabView from "../Layout/MenuTab/MenuTabView";
import UserPageView from "./UserPage/UserPageView";
import useUserInfoPage from "./useUserInfoPage";

const UserInfoView = () => {
  const {
    editMode,
    toggleEditMode,
    register,
    handleSubmit,
    formState,
    setValue,
    userInfo
  } = useUserInfoPage();

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderView />

      <div className="flex min-h-screen w-full">
        <aside className="hidden md:block shadow-sm">
          <SideBarLeftView />
        </aside>

        <main className="w-full xs:flex-1 p-4 bg-gray-100">
          <UserPageView
            editMode={editMode}
            toggleEditMode={toggleEditMode}
            userInfo={userInfo}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            setValue={setValue}
          />
        </main>
      </div>

      <FooterView />

      <MenuTabView />
    </div>
  );
};

export default UserInfoView;
