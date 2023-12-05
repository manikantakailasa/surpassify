import { Grid } from "@mui/material";
import styles from "./approach.module.css";
import image from "../../images/SELF-TEAM-COMPANY - right1.png";

const Approach = () => {
  return (
    <section className={styles.approach}>
      <Grid
        container
        sx={{ minHeight: "500px" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingLeft="25px"
      >
        <Grid item md={6} className={styles.text}>
          We drive and expedite transformative growth for executives and
          leadership teams, fostering accelerated development and sustained
          success.
        </Grid>
        <Grid item md={6}>
          <img src={image} className={styles.sectionback} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Approach;
