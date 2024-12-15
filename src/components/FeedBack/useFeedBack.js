import React, { useEffect, useState } from "react";

const useFeedBack = () => {
  const [feedBacks, setFeedBacks] = useState([]);

  useEffect(() => {
    setFeedBacks([
      { id: 1, image: null },
      { id: 2, image: null },
      { id: 3, image: null },
      { id: 4, image: null },
    ]);
  }, []);
  
  return { feedBacks };
};

export default useFeedBack;
