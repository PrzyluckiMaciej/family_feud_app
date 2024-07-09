import styles from "./styles.module.css";
import PlayerForm from "../PlayerForm";
import { IconButton } from "rsuite";
import { Plus } from "@rsuite/icons";
import { useState } from "react";

function AddPlayer() {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <IconButton
        className={styles.addButton}
        icon={<Plus />}
        onClick={toggleShowForm}
        title="Add a new player"
      ></IconButton>
      {showForm ? <PlayerForm toggle={toggleShowForm} /> : null}
    </div>
  );
}
export default AddPlayer;
