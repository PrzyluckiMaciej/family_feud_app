import styles from "./styles.module.css";
import data from "../../player_list.json"
import Player from "../Player"

function Players(props) {
    return (
        <div className={styles.playerList}>
            {
                data && 
                data.length>0 && 
                data.map((item)=><Player player={item} className={styles.playerContainer}/>)
            }
        </div>
    );
}
export default Players;