import React from "react";
import styles from "./Landing.module.css";
import { Stack, Grid, Button } from "@mui/material";

const Landing = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <Grid container spacing={2} width="80%">
          <Grid item xs={8}>
            <Stack marginLeft="150px">
              <p className={styles.heading}>
                Coaching Leaders & Transforming Organisations
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: "whitesmoke",
                }}
              >
                Agile Insights empowers leaders through expert coaching,
                catalyzing transformative journeys that reshape organizations
                for sustained excellence.
              </p>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack display="flex" justifyContent="space-around" height="100%">
              <Button
                variant="outlined"
                sx={{
                  ":hover": {
                    border: "2px solid #A1A5A0",
                  },
                  color: "whitesmoke",
                  height: "80px",
                  border: "2px solid whitesmoke",
                  fontSize: "24px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ":hover": {
                    border: "2px solid #A1A5A0",
                  },
                  color: "whitesmoke",
                  height: "80px",
                  border: "2px solid whitesmoke",
                  fontSize: "24px",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                Why Us?
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
