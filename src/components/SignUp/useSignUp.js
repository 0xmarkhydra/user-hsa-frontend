import { useState } from "react";

const useSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSignUp = (data) => {
    console.log(data);
  };
  return {
    showPassword,
    showConfirmPassword,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleSignUp,
  };
};

export default useSignUp;
