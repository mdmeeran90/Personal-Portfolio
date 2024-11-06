import { motion } from "framer-motion";
import Wikipedia from "../assets/wikipedia.jfif";
import Gearnix from "../assets/gearnix.jfif";
import Portfolio from "../assets/portfolio.png";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl my-20"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        <a href="https://gearnix-gaming-demo.netlify.app/" target="blank">
          <div
            className="flex flex-col text-center lg:text-start lg:flex-row  justify-center gap-8 mb-20"
            style={{ width: 700 }}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-center"
            >
              <img src={Gearnix} width={250} alt="" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col px-7"
            >
              <h1 className="text-2xl">Gearnix Gaming Website - Demo</h1>
              <p className="py-5 pl-5 pr-5 text-wrap w-1/2 text-center my-0 mx-auto lg:pl-0">
                This is a demo of Gearnix Gaming Website using HTML, CSS.
              </p>
            </motion.div>
          </div>
        </a>
        <a href="https://wikipedia-clone-omega.vercel.app/" target="blank">
          <div
            className="flex flex-col text-center lg:text-start lg:flex-row justify-center gap-8 mb-20"
            style={{ width: 700 }}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-center"
            >
              <img src={Wikipedia} width={350} alt="" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col px-7"
            >
              <h1 className="text-2xl">Wikipedia - Clone</h1>
              <p className="py-5 pl-5 pr-5 lg:pl-0 w-1/2 text-center my-0 mx-auto ">
                Wikipedia is a free online encyclopedia that anyone can edit,
                and millions already have.
              </p>
            </motion.div>
          </div>
        </a>
        <a href="#">
          <div className="flex flex-col text-center lg:text-start lg:flex-row justify-center gap-8" style={{ width: 700 }}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-center"
            >
              <img src={Portfolio} width={250} alt="" />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col px-7"
            >
              <h1 className="text-2xl">My Portfolio Website</h1>
              <p className="py-5 pl-5 pr-5 lg:pl-0 w-1/2 text-center my-0 mx-auto ">
                This is my portfolio website using ReactJS, TailwindCSS.
              </p>
            </motion.div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
