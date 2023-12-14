import React, { useEffect, useRef } from "react";
import { Divider, Grid, Stack } from "@mui/material";
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
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item md={5} xs={12} className={Styles.textleft}>
          <h4>
            <span
              style={{
                fontSize: "4.5rem",
                letterSpacing: "-2px",
                fontWeight: 700,
              }}
            >
              S
            </span>
            trategic <br /> Empowerment: <br />
            Catalyzing <br /> Accelerated Growth
            <Divider
              color="#FF3131"
              style={{
                marginTop: "2rem",
                width: "80%",
                borderBottomWidth: 5,
              }}
            />
          </h4>
        </Grid>
        <Grid item md={5} xs={12}>
          <Stack id="text" spacing={6} className={Styles.text}>
            <p>
              <span
                style={{
                  fontSize: "2.5rem",
                  color: "black",
                  letterSpacing: "-2px",
                  fontWeight: "300",
                }}
              >
                W
              </span>
              e elevate organizational potential by empowering executive and
              leadership teams. Through startegic guidance, we accelerate growth
              and navigate transformative journeys. Our tailored solutions
              cultivate leadership excellence, driving sustained success and
              fostering a culture of innovation and resilience fostering
              accelerated development and sustained success.
            </p>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default WhatWeDo;
