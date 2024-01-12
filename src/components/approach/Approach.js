import { Button, Divider, Grid } from "@mui/material";
import styles from "./approach.module.css";
import image from "../../images/SELF-TEAM-COMPANY - right1.png";

const Approach = () => {
  return (
    <section className={styles.approach}>
      <Grid container>
        <Grid item md={7}></Grid>
        <Grid item md={4} className={styles.contant}>
          <p className={styles.heading}>Let’s Collobrate!</p>
          <Divider
            color="#FF3131"
            style={{
              borderBottomWidth: 3,
              margin: "0 5rem ",
            }}
          />
          <p style={{ marginTop: "20px" }}>
            Our focus is on culture change, one leader and team at a time. Let's
            work together to achieve it.
          </p>
          <p style={{ padding: "35px", fontSize: "1rem", lineHeight: "40px" }}>
            If running a company is like piloting a spaceship, then leaders and
            their team are the engine that drives the whole thing forward. And
            just like a skilled mechanic, we're known for our ability to
            fine-tune every nut and bolt of your company culture and
            performance. Our secret sauce? Personalized coaching that's designed
            to fit your unique circumstances, boosting leadership superpowers
            and turbo-charging team collaborations.
          </p>
          <div className={styles.center}>
            <Button variant="contained" className={styles.button}>
              Get Ready for a spectacular show!
            </Button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Approach;
