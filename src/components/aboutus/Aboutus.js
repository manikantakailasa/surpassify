import styles from "./Aboutus.module.css";
import aboutus from "../../images/aboutus1.png";
import eq from "../../images/EQ-i.png";
import marshall from "../../images/Mashall-Goldsmith-logo.webp";
import cfi from "../../images/CFI-logo.png";
import mbti from "../../images/mbti-logo.png";
import thomas from "../../images/thomas-logo.png";
import hogan from "../../images/hogan-logo.webp";
import { Stack } from "@mui/material";

const Aboutus = () => {
  return (
    <section className={styles.aboutus}>
      <Stack>
        <img src={aboutus} className={styles.container} />
        <div className={styles.images}>
          <img src={mbti} />
          <img src={marshall} />
          <img src={cfi} />
          <img src={eq} />
          <img src={thomas} />
          <img src={hogan} />
        </div>
      </Stack>
    </section>
  );
};

export default Aboutus;
