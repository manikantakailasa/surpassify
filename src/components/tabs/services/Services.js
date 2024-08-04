import { useState } from "react";
import styles from "./Service.module.css";
import entcoaching from "../../../images/entcoaching.png";
import exeleadership from "../../../images/exeleadership.png";
import indicoaching from "../../../images/indicoaching.png";
import teamcoaching from "../../../images/teamcoaching.png";

const Services = () => {
  const [divActive, setDivActice] = useState(1);

  const handleDivActice = (possition) => {
    setDivActice(possition);
  };

  return (
    <>
      <div className={styles.service}>
        <div className={styles.overlay}></div>
      </div>
      <div>
        <div className={styles.slidecontainer}>
          <div
            onClick={() => handleDivActice(1)}
            className={styles.subcontainer}
          >
            <div
              style={{ height: "100%", display: "flex", flexDirection: "row" }}
            >
              <div
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "#61CAEB",
                  color: "white",
                }}
              >
                <span
                  style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}
                >
                  Entrepreneurship Coaching
                </span>
              </div>
            </div>
          </div>
          {divActive === 1 && (
            <div className={styles.contant}>
              <img src={entcoaching} width="100%" height="100%" />
            </div>
          )}
          <div
            onClick={() => handleDivActice(2)}
            className={styles.subcontainer}
          >
            <div
              style={{ height: "100%", display: "flex", flexDirection: "row" }}
            >
              <div
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "#F89B4F",
                  color: "white",
                }}
              >
                <span
                  style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}
                >
                  Executive & Leadership
                </span>
              </div>
            </div>
          </div>
          {divActive === 2 && (
            <div className={styles.contant}>
              <img src={exeleadership} width="100%" height="100%" />
            </div>
          )}
          <div
            onClick={() => handleDivActice(3)}
            className={styles.subcontainer}
          >
            <div
              style={{ height: "100%", display: "flex", flexDirection: "row" }}
            >
              <div
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "#42CFBD",
                  color: "white",
                }}
              >
                <span
                  style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}
                >
                  Individual Coaching
                </span>
              </div>
            </div>
          </div>
          {divActive === 3 && (
            <div className={styles.contant}>
              <img src={indicoaching} width="100%" height="100%" />
            </div>
          )}
          <div
            onClick={() => handleDivActice(4)}
            className={styles.subcontainer}
          >
            <div
              style={{ height: "100%", display: "flex", flexDirection: "row" }}
            >
              <div
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  backgroundColor: "#D249B9",
                  color: "white",
                }}
              >
                <span
                  style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}
                >
                  Team / Group Coaching
                </span>
              </div>
            </div>
          </div>
          {divActive === 4 && (
            <div className={styles.contant}>
              <img src={teamcoaching} width="100%" height="100%" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
