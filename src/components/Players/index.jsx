import styles from "./styles.module.css";
import Player from "../Player";
import PlayerForm from "../PlayerForm";
import { IconButton } from "rsuite";
import { Peoples } from "@rsuite/icons";
import { useEffect, useState } from "react";

function Players(props) {
  const [showForm, setShowForm] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("playerList");
    if (data != null) {
      setPlayers(JSON.parse(data));
    }
  }, []);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.playerList}>
      {players != null
        ? players.map((item) => (
            <Player player={item} className={styles.playerContainer} />
          ))
        : null}
      <IconButton
        className={styles.addButton}
        icon={<Peoples />}
        onClick={toggleShowForm}
      ></IconButton>
      {showForm ? <PlayerForm toggle={toggleShowForm} /> : null}
    </div>
  );
}
export default Players;
