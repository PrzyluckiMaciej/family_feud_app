import styles from "./styles.module.css";
import Players from "../Players";
import Slideshow from "../Slideshow";
import AddPlayer from "../AddPlayer";
import AddQuestion from "../AddQuestion";

const Main = () => {
  return (
    <div>
      <div>
        <Slideshow />
      </div>
      <div className={styles.addQuestion}>
        <AddQuestion />
      </div>
      <div className={styles.playerList}>
        <Players />
      </div>
      <div className={styles.addPlayer}>
        <AddPlayer />
      </div>
    </div>
  );
};
export default Main;
