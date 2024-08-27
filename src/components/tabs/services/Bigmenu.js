import { Link, MenuItem, Stack } from "@mui/material";
import styles from "./Bigmenu.module.css";

const BigMenu = () => {
  return (
    <Stack direction="row" className={styles.bigmenu}>
      <Stack>
        <h3>Agile Transformation</h3>
        <hr />
        <div className={styles.menuback}>
          <MenuItem href="#/services" component={Link}>
            Agile Assessment
          </MenuItem>
          <MenuItem>Agile Training</MenuItem>
          <MenuItem>Agile Coaching</MenuItem>
          <MenuItem>Agile Framework Selection</MenuItem>
          <MenuItem>Transformation Roadmap</MenuItem>
          <MenuItem>Organizational Change Management</MenuItem>
        </div>
      </Stack>
      <Stack>
        <h3>Consulting</h3>
        <hr />
        <div className={styles.menuback}>
          <MenuItem>Business Agility</MenuItem>
          <MenuItem>Strategic Thinking</MenuItem>
          <MenuItem>Value Stream Mapping</MenuItem>
          <MenuItem>Organisational Development</MenuItem>
          <MenuItem>Lean Portofolio Management</MenuItem>
          <MenuItem>Operational Execllence</MenuItem>
        </div>
      </Stack>
      <Stack>
        <h3>Coaching</h3>
        <hr />
        <div className={styles.menuback}>
          <MenuItem>Enterprenuership Coaching</MenuItem>
          <MenuItem>Executive Coaching</MenuItem>
          <MenuItem>Leadership Coaching</MenuItem>
          <MenuItem>Women Founders Coaching</MenuItem>
          <MenuItem>Individual Coaching</MenuItem>
          <MenuItem>Team Coaching</MenuItem>
        </div>
      </Stack>
      <Stack>
        <h3>Training/Workshops</h3>
        <hr />
        <div className={styles.menuback}>
          <MenuItem>SAFe Trainings</MenuItem>
          <MenuItem>Agile Trainings</MenuItem>
          <MenuItem>Emotional Intelligence</MenuItem>
        </div>
      </Stack>
      <Stack>
        <h3>Assessments</h3>
        <hr />
        <div className={styles.menuback}>
          <MenuItem>Agile Health Check</MenuItem>
          <MenuItem> EQI 2.0 Emotional Intelligence Assessment </MenuItem>
          <MenuItem>Marshmal Goldsmith 360 degree Assessment</MenuItem>
          <MenuItem>Hogan Assessment</MenuItem>
          <MenuItem>MBIT Assessment</MenuItem>
          <MenuItem>Gallup Cliffton Strengths Assessment</MenuItem>
        </div>
      </Stack>
    </Stack>
  );
};

export default BigMenu;
