import styles from "./Clients.module.css";
import fedex from "../../images/fedex.png";
import nielsen from "../../images/Nielsen.png";
import boeing from "../../images/boeing.png";
import ericsson from "../../images/ericssion.png";
import newfold from "../../images/newfold.png";
import applied from "../../images/applied.png";
import banfoss from "../../images/Danfos.png";
import lloyds from "../../images/lloyds.png";
import nats from "../../images/nats.png";
import betfair from "../../images/betfair.png";
import { Grid, Stack } from "@mui/material";

const Clients = () => {
  // return <div className={styles.home}>clients scroll............</div>;
  return (
    <section
      style={{
        width: "100%",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      <Stack
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <div className={styles.clienttext}>
          FIRMS OUR CONSULTANTS HAVE WORKED WITH
        </div>
        <Grid container width="80%">
          <Grid item xs={12} direction="column">
            <div className={styles.dflexcontainer}>
              <div className={styles.dflex}>
                <img src={nielsen} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={boeing} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={ericsson} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={newfold} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={fedex} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={applied} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={banfoss} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={lloyds} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={nats} with="100%" height="100%" />
              </div>
              <div className={styles.dflex}>
                <img src={betfair} with="100%" height="100%" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Stack>
    </section>
  );
};

export default Clients;
