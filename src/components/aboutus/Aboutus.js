import styles from "./Aboutus.module.css";
import aboutus from "../../images/aboutus1.png";
import eq from "../../images/eqilogo.png";
import marshall from "../../images/marshalllogo.png";
import cfi from "../../images/cfilogo.png";
import mbti from "../../images/mbtilogo.png";
import thomas from "../../images/thomaslogo.png";
import hogan from "../../images/hogonlogo.png";
import { Stack } from "@mui/material";

const Aboutus = () => {
  return (
    <section>
      <Stack className={styles.aboutus}>
        <img
          src={aboutus}
          className={styles.container}
          style={{ borderRadius: "10px" }}
        />
        <div className={styles.images}>
          <img src={marshall} />
          <img src={mbti} />
          <img src={eq} />
          <img src={hogan} />
          <img src={thomas} />
          <img src={cfi} />
        </div>
      </Stack>
    </section>
  );
};

export default Aboutus;
