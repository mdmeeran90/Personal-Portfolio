import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 px-12">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              width={300}
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 mt-12 max-w-xl py-6 pt-10">
              I am a skilled MERN Stack Developer with expertise in building
              dynamic, responsive, and scalable web applications. I am
              proficient in developing full-stack solutions using MongoDB,
              Express.js, React.js, and Node.js. I have a strong understanding
              of RESTful APIs, database management, and modern front-end
              frameworks.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
