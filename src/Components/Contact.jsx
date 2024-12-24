import { ContactDetails } from "../assets/ProjectData";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 mt-32">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h1>
      <div className="text-center tracking-tighter mt-10">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-5"
        >
          {ContactDetails.Address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-5"
        >
          {ContactDetails.PhNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="my-5 text-decoration-underline"
        >
          {ContactDetails.Email}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
