import React from "react";
import styles from "./Landing.module.css";
import { Stack, Button } from "@mui/material";

const Landing = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.layout}>
          <Stack flex={3}>
            <p className={styles.heading}>
              Coaching Leaders & Transforming Organisations
            </p>
            <p className={styles.subheading}>
              Agile Insights empowers leaders through expert coaching,
              catalyzing transformative journeys that reshape organizations for
              sustained excellence.
            </p>
          </Stack>
          <Stack spacing={2} flex={1}>
            <Button variant="outlined" className={styles.button}>
              Get Started
            </Button>
            <Button variant="outlined" className={styles.button}>
              Why Us?
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Landing;
