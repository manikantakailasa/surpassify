import { React, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../images/logo.png";

import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Divider, Link, ListItemIcon, Menu, MenuItem } from "@mui/material";
import BigMenu from "../tabs/services/Bigmenu";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <a onMouseOver={handleClick}>Services</a>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
            PaperProps={{
              elevation: 0,
              sx: {
                borderRadius: "1rem",
                overflow: "visible",
                width: "100%",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 3,
                "& .MuiAvatar-root": {
                  width: 132,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 400,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <BigMenu />
          </Menu>
        </li>
        <li>
          <a href="/whatsnew">Whats New?</a>
        </li>
        <li>
          <a href="/resource">Resources</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
