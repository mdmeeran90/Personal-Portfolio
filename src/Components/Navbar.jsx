import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return <nav className="mb-20 flex justify-between items-center py-6">
        <div className="flex flex-shrink-0 items-center">
            <h2 className="text-2xl font-semibold">PORTFOLIO</h2>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedinIn />
            <FaGithub />
            <FaInstagram />
            <FaFacebook />
        </div>
    </nav>
}

export default Navbar