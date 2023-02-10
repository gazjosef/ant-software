import React from "react";
import { useRef, useEffect } from "react";
// import { gsapFadeIn } from "@/components/Animations";

const useGsapFadeIn = () => {
  useEffect(() => {
    gsapFadeIn;
  }, []);

  const gsapFadeIn = (ref, delay) => {
    const el = ref.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power2",
        scrollTrigger: {
          trigger: el,
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "3rem",
          // },
        },
      }
    );
  };

  return <div>useGsapFadeIn</div>;
};

export default useGsapFadeIn;
