import React, { useState } from "react";

const useSideBarLeft = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return { toggleShowSidebar, showSidebar };
};

export default useSideBarLeft;
