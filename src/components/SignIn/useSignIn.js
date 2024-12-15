import { useState } from "react";
import Services from "@/services";
import {useRouter} from "next/navigation";

const useSignIn = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async ({email, password}) => {
    console.log(email, password);
    Services.authService.login({email, password}).then((res) => {
        console.log(res);
        if(res.status === 201) {
            window.localStorage.setItem("access_token", res?.data?.data?.accessToken);
            // redirect to home page
            router.push("/");
        }
    }).catch((err) => {
        console.log(err);
    });
  }
  return { showPassword, toggleShowPassword, handleLogin };
};

export default useSignIn;