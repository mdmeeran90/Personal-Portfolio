import { motion } from "framer-motion";
import MeeranResume from "../assets/Md Meeran - Resume.pdf";

const container = (delay) => ({
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center lg:items-center">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-center text-6xl font-semibold tracking-tight lg:mt-16 lg:text-6xl"
            >
              Mohamed Meeran
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-3xl tracking-tight text-transparent text-2xl"
            >
              Mern Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-center font-light tracking-tighter"
            >
              I am a passionate Mern Stack Developer with a knack for crafting
              robust and scalable web applications. I have honed my skills in
              like Bootstrap, Java Script, React JS, Tailwind, Node JS, Express
              JS and Mongo DB. My goal is to leverage my expertise to create
              innovative solutions that drive business growth and deliver
              exceptional user experiences.
            </motion.p>
            <motion.button
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="bg-white text-black font-semibold rounded-full px-5 py-3"
            >
              <a href={MeeranResume} download>
                Download Resume
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
