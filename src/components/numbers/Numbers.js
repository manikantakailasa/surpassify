import { Stack } from "@mui/material";
import styles from "./Numbers.module.css";

const Numbers = () => {
  return (
    <section className={styles.numbers}>
      <div direction="row" className={styles.container}>
        <Stack className={styles.subcontainer}>
          <Stack direction="row">
            <Stack className={styles.size}>35</Stack>
            <Stack className={styles.plus}>+</Stack>
          </Stack>
          <Stack className={styles.text}>YEARS OF COMBINED EXPERIENCE</Stack>
        </Stack>
        <Stack className={styles.subcontainer}>
          <Stack direction="row">
            <Stack className={styles.size}>95</Stack>
            <Stack className={styles.plus}>%</Stack>
          </Stack>
          <Stack className={styles.text}>
            FIRST-TIME CLIENTS WHO BECOME REPEAT
          </Stack>
        </Stack>
        <Stack className={styles.subcontainer}>
          <Stack direction="row">
            <Stack className={styles.size}>375</Stack>
            <Stack className={styles.plus}>+</Stack>
          </Stack>
          <Stack className={styles.text}>
            LEADERS WHOSE GROWTH WE SUPPORTED
          </Stack>
        </Stack>
        <Stack className={styles.subcontainer}>
          <Stack direction="row">
            <Stack className={styles.size}>75</Stack>
            <Stack className={styles.plus}>+</Stack>
          </Stack>
          <Stack className={styles.text}>LEADERSHIP TEAMS BUILT</Stack>
        </Stack>
      </div>
    </section>
  );
};

export default Numbers;
