import { motion } from "framer-motion";
import { ProjectData } from "../assets/ProjectData";
import { FaLink } from "react-icons/fa";

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

      {ProjectData.map((project, index) => (
        <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project.image}
              alt={project.title}
              width={250}
              height={250}
              className="mb-6 pl-3"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
            <p className="mb-4 text-stone-400">{project.description}</p>
            <p className="mt-4 mb-4 text-stone-400 flex flex-wrap items-center gap-2">
              {" "}
              <FaLink />
              <a href={project.demo} target="_blank">
                Live Demo
              </a>
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
