import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Grand event landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-70">International Event Agency</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Crafting Unforgettable<br />Experiences Worldwide
        </h1>
        <p className="text-lg md:text-xl opacity-80 mb-4 italic">
          Where Vision Meets Execution
        </p>
        <p className="text-sm md:text-base opacity-70 max-w-2xl mx-auto leading-relaxed">
          We are Fortis Company — an international event management company with a proven track record
          of delivering exceptional events across five continents.
        </p>
      </div>
    </div>
  );
}
