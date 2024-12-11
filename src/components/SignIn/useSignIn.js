import { useState } from "react";

const useSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = ({email, password}) => {
    console.log(email, password);
    
  }
  return { showPassword, toggleShowPassword, handleLogin };
};

export default useSignIn;
