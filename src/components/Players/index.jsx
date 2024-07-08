import styles from "./styles.module.css";
import Player from "../Player";
import { useEffect, useState } from "react";

function Players(props) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("playerList");
    if (data != null) {
      setPlayers(JSON.parse(data));
    }
  }, []);

  return (
    <div className={styles.playerList}>
      {players != null
        ? players.map((item) => (
            <Player
              key={item.name}
              player={item}
              className={styles.playerContainer}
            />
          ))
        : null}
    </div>
  );
}
export default Players;
