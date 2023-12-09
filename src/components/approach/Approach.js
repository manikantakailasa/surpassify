import { Grid } from "@mui/material";
import styles from "./approach.module.css";
import image from "../../images/SELF-TEAM-COMPANY - right1.png";

const Approach = () => {
  return (
    <section className={styles.approach}>
      <Grid container className={styles.container}>
        <Grid item md={4} className={styles.text}>
          We drive and expedite transformative growth for executives and
          leadership teams, fostering accelerated development and sustained
          success.
        </Grid>
        <Grid item md={8}>
          <img src={image} className={styles.sectionback} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Approach;
