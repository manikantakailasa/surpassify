import React from "react";
import styles from "./Agile.module.css";

const Agile = () => {
  return (
    <div className={styles.Agile}>
      <div className={styles.overlay}>
        <div className={styles.driver}>
          <h2>
            Find the perfect car <span>to try before you buy</span>
          </h2>
          <p>
            Make sure your future wheels work well with your lifestyle by taking
            your time in the driver's seat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agile;
