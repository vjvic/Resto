import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const useAnimate = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView, animation]);

  return { ref, animation, motion };
};

export default useAnimate;
