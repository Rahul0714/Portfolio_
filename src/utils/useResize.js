import { useEffect, useState } from "react";

const onResize = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    const listenResize = () => {
      setWidth(window.innerWidth);
    };

    addEventListener("resize", listenResize);
    return () => removeEventListener("resize", listenResize);
  }, []);
  return +width < 640;
};

export default onResize;
