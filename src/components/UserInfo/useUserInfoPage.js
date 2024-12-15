import useUserInfo from "@/hooks/useUserInfo";
import Stores from "@/stores";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const useUserInfoPage = () => {
  const [editMode, setEditMode] = useState(false);
  const { userInfo } = useUserInfo();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  useEffect(() => {
    if (!userInfo) {
      router.push("/dang-nhap");
      return;
    }
    if (userInfo) {
      reset({
        fullname: userInfo.full_name || "",
        username: userInfo.username || "",
        email: userInfo.email || "",
        phone: userInfo.phone_number || "-",
      });
    }
  }, [userInfo, reset]);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return {
    editMode,
    toggleEditMode,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    userInfo,
  };
};

export default useUserInfoPage;
