import { Stack } from "@mui/material";
import styles from "./Contactus.module.css";
import { useEffect } from "react";
import schedule from "../../images/schedulecall.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";

const Contactus = () => {
  // useEffect(() => {
  //   window.addEventListener(
  //     "scroll",
  //     () => {
  //       document
  //         .getElementById("animation")
  //         .style.setProperty(
  //           "--scroll",
  //           window.pageYOffset /
  //             (document.getElementById("animation").offsetHeight -
  //               window.innerHeight)
  //         );
  //     },
  //     false
  //   );
  // });
  return (
    <div>
      <div className={styles.contactus}>
        <div className={styles.layout}>
          <p>Let's start a conversation.</p>
        </div>
      </div>
      <Stack className={styles.form} direction="row">
        <img src={schedule} width="50%" height="50%" />

        <div>
          <p className={styles.subheading}>How can we help you today?</p>
          <form>
            <label>
              <Stack spacing={4}>
                <input type="text" name="name" placeholder="Your Name*" />
                <input
                  type="text"
                  name="email"
                  placeholder="Your email address*"
                />
                <input type="text" name="mobile" placeholder="Mobile Number" />
                <input
                  type="text"
                  name="helptext"
                  placeholder="How can we help you?"
                />
              </Stack>
            </label>
            <button className={styles.button} type="submit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </Stack>
      <div id="animation" className={styles.social}>
        <Stack display="flex" alignItems="center" spacing={2}>
          <PhoneIcon />
          <p> +91 number</p>
          <LinkedInIcon />
          <LanguageIcon />
          <p>surpassify.com</p>
        </Stack>
        {/* <svg width="100" height="100" viewBox="0 0 24 24">
          <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
        </svg> */}
      </div>
    </div>
  );
};

export default Contactus;
