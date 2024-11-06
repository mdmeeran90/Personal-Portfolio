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
            <a href="https://www.linkedin.com/in/mohamed-meeran-7b4908293/" target="blank"><FaLinkedinIn /></a> 
            <a href="https://github.com/mdmeeran90" target="blank"><FaGithub /></a>
            <a href=" https://www.instagram.com/__._meeran_.__/" target="blank"><FaInstagram /></a>
            <a href=" https://m.facebook.com/profile.php?id=100035504040223" target="blank"><FaFacebook /></a>
        </div>
    </nav>
}

export default Navbar