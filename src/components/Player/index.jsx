import styles from "./styles.module.css";
import { IconButton } from "rsuite";
import { Trash, ExpandOutline, Close, CollaspedOutline } from "@rsuite/icons";
import { useState } from "react";

const Player = (props) => {
  const player = props.player;
  var [points, setPoints] = useState(0);
  var [livesLost, setLivesLost] = useState(0);

  const handleAddPoints = () => {
    setPoints(points + 1);
  };

  const handleDeletePoints = () => {
    setPoints(0);
  };

  const handleCrossClick = () => {
    if (livesLost < 3) {
      setLivesLost(livesLost + 1);
    }
  };

  const handleDeleteCross = () => {
    setLivesLost(0);
  };

  return (
    <div className={styles.playerContainer}>
      <IconButton className={styles.deleteButton} icon={<Trash />}></IconButton>
      <p className={styles.playerName} onClick={handleDeleteCross}>
        {player.name}
      </p>
      <div className={styles.crossContainer}>
        {[...Array(livesLost).keys()].map((key) => (
          <IconButton
            icon={<Close />}
            className={styles.crossIcon}
          ></IconButton>
        ))}
      </div>
      <div className={styles.pointsContainer}>
        <p className={styles.points} onClick={handleDeletePoints}>
          {points}
        </p>
        <IconButton
          className={styles.plusButton}
          icon={<ExpandOutline />}
          onClick={handleAddPoints}
        ></IconButton>
        <IconButton
          className={styles.crossButton}
          icon={<CollaspedOutline />}
          onClick={handleCrossClick}
        ></IconButton>
      </div>
    </div>
  );
};
export default Player;
