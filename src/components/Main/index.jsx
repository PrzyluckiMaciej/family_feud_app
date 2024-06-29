import styles from "./styles.module.css";
import Players from "../Players"

const Main = () => {
    return (
        <div className={styles.playerList}>
            <Players/>
        </div>
    );
}
export default Main