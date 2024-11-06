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
            <p className="my-2 max-w-xl py-6 pt-10">
              I am a front-end developer builds the front-end portion of
              websites and web applications—the part users see and interact
              with. A front-end developer creates websites and applications
              using web languages such as HTML, CSS, and JavaScript that allow
              users to access and interact with the site or app.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
