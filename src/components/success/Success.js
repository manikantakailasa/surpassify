import { Button, Stack } from "@mui/material";
import styles from "./Success.module.css";
import logo from "../../images/minilogo.png";
const Success = () => {
  return (
    <div>
      <Stack className={styles.container}>
        <img src={logo} width="10%" />
        <p style={{ color: "black", fontWeight: "500", fontSize: "3rem" }}>
          Let's Build Your Success Together
        </p>
        <p style={{ lineHeight: 1.5 }}>
          Achieve Success through Collaboratiodule an exploratory conversation
          with us today, and let's work together to create a path to your
          success.
        </p>
        <Button variant="contained" className={styles.button}>
          Connect
        </Button>
      </Stack>
    </div>
  );
};

export default Success;
