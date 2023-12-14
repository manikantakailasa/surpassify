import { Grid, Stack } from "@mui/material";
import styles from "./ourservice.module.css";
import blue from "../../images/blue.png";
import red from "../../images/red.webp";
import orange from "../../images/orange.webp";
import green from "../../images/green.webp";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
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
              Shape impactful growth with a strategy fueled by stakeholder
              insights
            </p>
            <TrendingFlatIcon />
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
            <TrendingFlatIcon />
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
            <p>Agile Transform</p>
            <p>
              Shape impactful growth with a strategy fueled by stakeholder
              insights
            </p>
            <TrendingFlatIcon />
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
            <p>Emotional Intel.</p>
            <p>
              Shape impactful growth with a strategy fueled by stakeholder
              insights
            </p>
            <TrendingFlatIcon />
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
            <p>Assessments</p>
            <p>
              Shape impactful growth with a strategy fueled by stakeholder
              insights
            </p>
            <TrendingFlatIcon />
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default Ourservice;
