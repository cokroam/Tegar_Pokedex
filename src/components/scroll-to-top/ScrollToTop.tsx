import { useEffect, useState } from "react";

import pokeBallImage from "../../assets/images/poke_ball_icon.svg";
import classes from "./ScrollToTop.module.scss";

export const ScrollToTop = () => {
  const [scrollActive, setScrollActive] = useState(false);

  const handleScroll = () => {
    setScrollActive(window.scrollY > 200);
  };

  const handleGotToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!scrollActive) return null;

  return (
    <div className={classes["scroll-to-top"]} onClick={handleGotToTop}>
      <img src={pokeBallImage} alt="pokeapi scroll-top" />
    </div>
  );
};
