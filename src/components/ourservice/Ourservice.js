import { Grid, Stack } from "@mui/material";
import styles from "./ourservice.module.css";
import blue from "../../images/blue.png";
import red from "../../images/red.webp";
import orange from "../../images/orange.webp";
import green from "../../images/green.webp";

const Ourservice = () => {
  const handleOnFocus = () => {
    document.getElementById("heading").style.color = "#fff";
  };
  const handleOnLeave = () => {
    document.getElementById("heading").style.color = "#fb8302";
  };

  return (
    <section className={styles.ourservice}>
      <Grid
        container
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        minHeight={400}
      >
        <p id="heading" />
        <Grid item md={12 / 5} sm={4} className={styles.textborder}>
          <Stack
            spacing={4}
            padding={4}
            minHeight={400}
            sx={{
              ":hover": {
                background: `url('${blue}')`,
                "& p": {
                  color: "white",
                  transition: "color 400ms ease-in-out",
                },
              },
            }}
            onMouseEnter={handleOnFocus}
            onMouseLeave={handleOnLeave}
          >
            <p>Coaching</p>
            <p>
              Cultivate an authentic, emotionally resilient, and consistently
              effective leadership approach you can sustain
            </p>
          </Stack>
        </Grid>
        <Grid item md={12 / 5} sm={4} className={styles.textborder}>
          <Stack
            spacing={4}
            padding={4}
            minHeight={400}
            sx={{
              ":hover": {
                background: `url('${orange}')`,
                "& p": {
                  color: "white",
                  fontWeight: "300",
                  transition: "color 400ms ease-in-out",
                },
              },
            }}
            onMouseEnter={handleOnFocus}
            onMouseLeave={handleOnLeave}
          >
            <p>Consulting</p>
            <p>
              Shape impactful growth with a strategy fueled by stakeholder
              insights
            </p>
          </Stack>
        </Grid>
        <Grid item md={12 / 5} sm={4} className={styles.textborder}>
          <Stack
            spacing={4}
            padding={4}
            minHeight={400}
            sx={{
              ":hover": {
                background: `url('${red}')`,
                "& p": {
                  color: "white",
                  transition: "color 400ms ease-in-out",
                },
              },
            }}
            onMouseEnter={handleOnFocus}
            onMouseLeave={handleOnLeave}
          >
            <p>Agile Transformation</p>
            <p>
              Drive success withScaled Agile transformation in your organization
            </p>
          </Stack>
        </Grid>
        <Grid item md={12 / 5} sm={4} className={styles.textborder}>
          <Stack
            spacing={4}
            padding={4}
            minHeight={400}
            sx={{
              ":hover": {
                background: `url('${green}')`,
                "& p": {
                  color: "white",
                  transition: "color 400ms ease-in-out",
                },
              },
            }}
            onMouseEnter={handleOnFocus}
            onMouseLeave={handleOnLeave}
          >
            <p>Emotional Intelligence</p>
            <p>
              Creating outstanding business products and services, fostering
              success, and achieving high performance with a skilled and
              emotionally intelligent workforce
            </p>
          </Stack>
        </Grid>
        <Grid item md={12 / 5} sm={4} className={styles.textborder}>
          <Stack
            spacing={4}
            padding={4}
            minHeight={400}
            sx={{
              ":hover": {
                background: `url('${blue}')`,
                "& p": {
                  color: "white",
                  transition: "color 400ms ease-in-out",
                },
              },
            }}
            onMouseEnter={handleOnFocus}
            onMouseLeave={handleOnLeave}
          >
            <p>Workshops & Assessments</p>
            <p>
              Profound exploration of our current position to pave the way for
              tangible progress and meaningful outcomes
            </p>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default Ourservice;
