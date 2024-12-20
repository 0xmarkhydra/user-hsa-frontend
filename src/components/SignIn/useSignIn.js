import { useState } from "react";
import Services from "@/services";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useSignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async ({ username, password }) => {
    // console.log(username, password);
    Services.authService
      .login({ username, password })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          window.localStorage.setItem(
            "access_token",
            res?.data?.data?.accessToken
          );
          // redirect to home page
          toast.success("Đăng nhập thành công!");
          router.push("/");
        }
      })
      .catch((err) => {
        toast.error("Đăng nhập thất bại, kiểm tra lại email và mật khẩu");
        console.log(err);
      });
  };
  return { showPassword, toggleShowPassword, handleLogin };
};

export default useSignIn;
