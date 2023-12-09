import React, { useEffect, useRef } from "react";
import styles from "./Driver.module.css";
import Drive from "../../images/drive.png";

const Driver = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // trigger when 50% of the target is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The target is intersecting with the viewport
          console.log("Target is now visible!");
          document.getElementById("image").classList.add(styles.fadeinleft);
          // Do something, e.g., load additional content
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <div className={styles.driver}>
      <div ref={targetRef} className={styles.left}>
        <img id="image" src={Drive} alt="/" />
      </div>
      <div>
        <h2>
          Find the perfect car <span>to try before you buy</span>
        </h2>
        <p>
          Make sure your future wheels work well with your lifestyle by taking
          your time in the driver's seat.
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;
