import React from "react";
import { motion } from "framer-motion";

export default function FlyAnimation() {
  const animationVariants = {
    initial: { y: "-100%" },
    animate: { y: "100%" },
  };

  const animationTransition = {
    duration: 1.2,
    ease: "easeInOut",
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={animationVariants}
      transition={animationTransition}
      className="fixed top-0 left-0 w-screen h-screen bg-slate-800 z-50"
    />
  );
}

