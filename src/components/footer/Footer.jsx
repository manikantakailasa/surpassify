import React from "react";
import Logo from "../../images/logo.png";

import styles from "./Footer.module.css";
import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.maincontainer}>
        <div className={styles.container}>
          <div style={{ minWidth: "8.5%" }} />
          <Stack className={styles.subcontainer}>
            <img src={Logo} width="100%" />
            <p>
              We facilitate and accelerate transformative growth for executives
              and leadership teams.
            </p>
          </Stack>
          <div style={{ minWidth: "8.5%" }} />
          <Stack className={styles.subcontainer}>
            <p>ABOUT US</p>
            <p>Our Story</p>
            <p>Team</p>
            <p>Coaching Approach</p>
            <p>Our Book</p>
            <p>Contact</p>
          </Stack>
          <div style={{ minWidth: "8.5%" }}></div>
          <Stack className={styles.subcontainer}>
            <p>SERVICES</p>
            <p>Executive Coaching</p>
            <p>In-Depth 360 Review</p>
            <p>Team Development</p>
            <p>Team Offsites</p>
            <p>eCourses</p>
          </Stack>
          <div style={{ minWidth: "8.5%" }}></div>
          <Stack className={styles.subcontainer}>
            <p>FOLLOW US</p>
          </Stack>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
