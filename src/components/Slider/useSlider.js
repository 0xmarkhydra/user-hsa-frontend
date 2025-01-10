import React, { useState, useEffect } from "react";

const useSlider = () => {
  const images = [
    "https://via.placeholder.com/600x300/ff7f7f/333333?text=Image+1",
    "https://via.placeholder.com/600x300/7f7fff/333333?text=Image+2",
    "https://via.placeholder.com/600x300/7fff7f/333333?text=Image+3",
    "https://via.placeholder.com/600x300/ffff7f/333333?text=Image+4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const goToIndex = (index) => {
    setCurrentIndex((prevIndex) => {
      if (index >= 0 && index < images.length && index !== prevIndex) {
        return index;
      }
      return prevIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToIndex((currentIndex + 1) % images.length);
    }, 10000);
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const resetInterval = () => {
    clearInterval(intervalId);
    const newInterval = setInterval(
      () => goToIndex((currentIndex + 1) % images.length),
      10000
    );
    setIntervalId(newInterval);
  };

  return { currentIndex, goToIndex, images, resetInterval };
};

export default useSlider;
