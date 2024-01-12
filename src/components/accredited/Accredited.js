import { Divider, Grid, Stack } from "@mui/material";
import styles from "./Accredited.module.css";

import eq from "../../images/eqilogo.png";
import marshall from "../../images/marshalllogo.png";
import cfi from "../../images/cfilogo.png";
import mbti from "../../images/mbtilogo.png";
import thomas from "../../images/thomaslogo.png";
import hogan from "../../images/hogonlogo.png";
import spc from "../../images/spclogo.png";
import icf from "../../images/icflogo.png";
import accre from "../../images/accrelogo.png";

const Accredited = () => {
  return (
    <Grid container className={styles.container}>
      <Grid item md={7}>
        <Stack direction="row">
          <div style={{ paddingLeft: "35px" }}>
            <p className={styles.header}>
              Authenetic <br /> Interatcions
            </p>
            <Divider
              color="#E26524"
              sx={{
                borderBottomWidth: 1,
                margin: "0 4rem ",
              }}
            />
            <p className={styles.content}>
              we pride ourselves on our genuine and inquisitive approach towards
              unraveling the intricacies of your circumstances. Our adeptness
              lies in addressing the underlying problems that hinder your
              progress towards success.
            </p>
          </div>
          <div style={{ paddingRight: "25px" }}>
            <p className={styles.header}>
              Surpassing
              <br /> Results
            </p>
            <Divider
              color="#E26524"
              sx={{ borderBottomWidth: 1, margin: "0 4rem " }}
            />
            <p className={styles.content}>
              Our objective is to deliver exceptional outcomes, which comprise
              of valuable perspectives, practical concepts, and constructive,
              long-lasting transformation that continues beyond our engagement
              with you.
            </p>
          </div>
        </Stack>
      </Grid>
      <Grid item md={4} sx={{ padding: "1rem" }} className={styles.images}>
        <p className={styles.header}>Accredited Expertise</p>
        {/* <Divider color="red" sx={{ borderBottomWidth: 1 }} /> */}
        <div>
          <img src={accre} />
          {/* <img src={spc} />
        <img src={marshall} />
        <img src={mbti} />
        <img src={eq} />
        <img src={hogan} />
        <img src={thomas} />
        <img src={icf} />
      <img src={cfi} /> */}
        </div>
      </Grid>
    </Grid>
  );
};

export default Accredited;
