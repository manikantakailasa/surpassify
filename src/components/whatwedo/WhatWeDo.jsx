import React from "react";
import Drive from "../../images/drive.png";
import { Grid, Stack } from "@mui/material";
import Styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <section className={Styles.whatwedo}>
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6} xs={12} display="flex" justifyContent="center">
          <img src={Drive} style={{ maxWidth: "512px" }} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Stack
            spacing={6}
            sx={{
              color: "#828282",
              fontSize: "27px",
              display: "flex",
              justifyContent: "center",
              padding: "25px",
              fontFamily: "Roboto",
            }}
          >
            <p>
              <span>W</span>e drive and expedite transformative growth for
              executives and leadership teams, fostering accelerated development
              and sustained success.
            </p>
            <p>
              At our core, we specialize in orchestrating and expediting
              transformative growth initiatives tailored for executives and
              leadership teams. Through strategic facilitation, we empower
              individuals and teams to navigate change seamlessly, unlocking
              their full potential and propelling them towards sustained
              success.
            </p>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default WhatWeDo;
