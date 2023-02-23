import { useState } from "react";

export default function useHoverModal() {
  const [timeHover, setTimeHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
  const [datHover, setDotHover] = useState(false);

  const timeLineHover = () => {
    setTimeHover(true);
  };

  const menuArrowHover = () => {
    setArrowHover(true);
  };

  const menuDotHover = () => {
    setDotHover(true);
  };

  const clearTimeHover = () => {
    setTimeHover(false);
  };

  const clearArrowHover = () => {
    setArrowHover(false);
  };

  const clearDotHover = () => {
    setDotHover(false);
  };

  return [
    timeHover,
    arrowHover,
    datHover,
    timeLineHover,
    menuArrowHover,
    menuDotHover,
    clearTimeHover,
    clearArrowHover,
    clearDotHover,
  ];
}
