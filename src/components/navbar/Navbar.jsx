import { React, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../images/logo.png";

import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "@mui/material";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 70 ? setScrolled(true) : setScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={isScrolled ? styles.sticky : styles.navbar}>
      <img
        onClick={() => (window.location = "./")}
        style={{ cursor: "pointer" }}
        src={Logo}
        alt="Logo"
        width="230px"
      />
      <ul
        className={nav ? [styles.menu, styles.active].join(" ") : [styles.menu]}
      >
        <li style={{ border: "2px solid white", borderRadius: "38%" }}>
          <Link style={{ textDecoration: "none" }} href="/">
            Home
          </Link>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/whatsnew">Whats New?</a>
        </li>
        <li>
          <a href="/resource">Resources</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
