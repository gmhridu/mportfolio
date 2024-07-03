import React from "react";
import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin, FaFacebook, FaGithub} from 'react-icons/fa'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 cursor-pointer">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-bold tracking-tighter">GMR</h1>
      </div>

      <div className="flex items-center justify-center gap-4 text-2xl">
        <Link to={'https://github.com/gmhridu'} target="_blank">
        <FaGithub/>
        </Link>
        <Link to={'https://www.linkedin.com/in/golam-mahabub-hridu/'} target="_blank">
        <FaLinkedin/>
        </Link>
        <Link to={'https://www.facebook.com/0.0.Meaaaw.0.0?mibextid=ZbWKwL'} target="_blank">
        <FaFacebook/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
