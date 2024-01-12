import styles from "./Aboutus.module.css";
import aboutus from "../../images/about us.png";
import { Stack } from "@mui/material";

const Aboutus = () => {
  return (
    <section>
      <Stack className={styles.aboutus}>
        <img src={aboutus} className={styles.container} />
      </Stack>
    </section>
  );
};

export default Aboutus;
