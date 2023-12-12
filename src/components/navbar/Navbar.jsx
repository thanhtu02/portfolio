import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="#no-access">
            <img src="/facebook.png" alt="Duong-dan-Facebook-khong-chia-se" />
          </a>
          <a href="https://instagram.com/xzaiyu?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr">
            <img src="/instagram.png" alt="Duong-dan-Instagram" />
          </a>
          <a href="http://linkedin.com/in/thanh-tu-456413275">
            <img src="/linkedin.png" alt="Duong-dan-Linkedin" />
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
