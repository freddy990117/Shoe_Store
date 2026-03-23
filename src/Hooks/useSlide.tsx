import { useState } from "react";

export const useSlide = (length: number, initalIndex = 0) => {
  const [currentIndex, setCurrectIndex] = useState(initalIndex);

  const next = () => {
    setCurrectIndex((prev) => {
      return prev < length - 1 ? prev + 1 : prev;
    });
  };

  const prev = () => {
    setCurrectIndex((prev) => {
      return prev > 0 ? prev - 1 : 0;
    });
  };

  return {
    setCurrectIndex,
    currentIndex,
    next,
    prev,
  };
};
