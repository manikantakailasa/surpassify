import React from "react";
import styles from "./Landing.module.css";
import { Stack, Button } from "@mui/material";

const Landing = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.layout}>
          <Stack>
            <p className={styles.heading}>Journey Of Excellence</p>
            <p className={styles.subheading}>
              Coaching Leaders, Transforming Organization for Sustainable
              Success
            </p>
            <Button variant="contained" className={styles.button}>
              DIVE IN
            </Button>
          </Stack>
          {/* <Stack spacing={2} flex={1}>
            <Button variant="outlined" className={styles.button}>
              Why Us?
            </Button>
          </Stack> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
