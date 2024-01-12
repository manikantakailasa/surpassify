import React from "react";
import { Grid, MenuItem, Select, Stack } from "@mui/material";
import styles from "./Contactus.module.css";
import { useEffect } from "react";
import schedule from "../../images/schedulecall.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import map from "../../images/map.png";
import { InputLabel } from "@material-ui/core";

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
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className={styles.contactus}>
        <div className={styles.layout}>
          <p>Collaborate with us to craft something extraordinary.</p>
        </div>
      </div>
      <Grid container className={styles.addcontainer1}>
        <Grid item xs="4" className={styles.addcontant1}>
          <p>OFFICE HOURS</p>
        </Grid>
        <Grid item xs="4" className={styles.addcontant1}>
          <p>OFFICE ADDRESS</p>
        </Grid>
        <Grid item xs="4" className={styles.addcontant1}>
          <p>E-MAIL ADDRESS</p>
        </Grid>
      </Grid>
      <Grid container className={styles.addcontainer}>
        <Grid item xs="4" className={styles.addcontant}>
          <p>Mon-Fri: 9AM to 5 PM</p>
        </Grid>
        <Grid item xs="4" className={styles.addcontant}>
          <p>
            5th & 6th Floor, The High Street, 32nd D Cross Rd, 4th T Block East,
            4th Block, Jayanagar, Bengaluru, Karnataka 560011
          </p>
          <br />
          <hr style={{ width: "80%", margin: "auto" }} />
          <br />
          <p>
            4th Floor, COHORT Building, 2/91/20, BP Raju Marg, Laxmi Cyber City,
            Whitefields, Opposite AMB Mall, Kondapur, Hyderabad, Telangana
            500081 <br /> (Location: https://maps.app.goo.gl/oAmegBZoP1gfoafz8 )
          </p>
        </Grid>
        <Grid item xs="4" className={styles.addcontant}>
          <p>email</p>
        </Grid>
      </Grid>
      <Grid container className={styles.form}>
        <Grid item xs="7">
          <p>
            Schedule a 30-minute intro call to explore how we might support your
            or your team’s goals.
          </p>
          <br />

          <br />
          <img src={schedule} width="50%" height="50%" />
        </Grid>

        <Grid item xs="4">
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
                <label
                  style={{
                    fontFamily: "poppins",
                    fontWeight: "revert",
                    fontSize: "1rem",
                    paddingLeft: "1rem",
                  }}
                >
                  What are you intrested in ?
                </label>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age}
                  onChange={handleChange}
                  placeholder="age"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>General Equality</MenuItem>
                  <MenuItem value={20}>One to One Coaching</MenuItem>
                  <MenuItem value={30}>Group Coaching</MenuItem>
                  <MenuItem value={40}>Workshop</MenuItem>
                  <MenuItem value={50}>Speaking Engagement</MenuItem>
                </Select>
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
        </Grid>
      </Grid>
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
      <div className={styles.map}>
        <img src={map} width="100%" />
      </div>
    </div>
  );
};

export default Contactus;
