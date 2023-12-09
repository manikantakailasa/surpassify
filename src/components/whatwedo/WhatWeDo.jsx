import React, { useEffect, useRef } from "react";
import wedo from "../../images/whatwedo.png";
import { Grid, Stack } from "@mui/material";
import Styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: "0px",
      threshold: 0.6, // trigger when 50% of the target is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The target is intersecting with the viewport
          console.log("Target is now visible!");
          document.getElementById("image").classList.add(Styles.fadeinleft);
          // Do something, e.g., load additional content
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
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
          <img
            id="image"
            ref={targetRef}
            src={wedo}
            style={{ width: "150%", opacity: 0 }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Stack id="text" spacing={6} className={Styles.text}>
            <p>
              <span
                style={{
                  fontSize: "4rem",
                  color: "black",
                  letterSpacing: "-5px",
                  fontWeight: "300",
                }}
              >
                W
              </span>
              <span style={{ fontWeight: "400" }}>
                e drive and expedite transformative growth for executives and
                leadership teams,
              </span>
              <span style={{ fontWeight: "200" }}>
                fostering accelerated development and sustained success.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: "200" }}>
                At our core, we specialize in orchestrating and expediting
                transformative growth initiatives tailored for executives and
                leadership teams. Through strategic facilitation, we empower
                individuals and teams to navigate change seamlessly,
              </span>{" "}
              unlocking their full potential and propelling them towards
              sustained success.
            </p>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default WhatWeDo;
