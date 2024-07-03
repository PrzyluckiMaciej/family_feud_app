import styles from "./styles.module.css";
import { useState } from "react";

function PlayerForm(props) {
  const [player, setPlayer] = useState({ name: "" });

  const handleChange = ({ currentTarget: input }) => {
    setPlayer({ ...player, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleExit();

    var arr = JSON.parse(
        localStorage.getItem('playerList') || '[]'
    );

    arr.push(player);

    localStorage.setItem("playerList", JSON.stringify(arr));
    window.location.reload();
  };

  const handleExit = () => {
    var form = document.getElementById("form");
    form.classList.add(styles.popup_disappear);
    form.classList.remove(styles.popup_appear);
    setTimeout(function(){props.toggle();}, 600);
  }

  return (
    <div id="form" className={`${styles.popup} ${styles.popup_appear}`}>
      <div className={styles.popup_inner}>
        <h2>Add a new player</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <button type="submit">Add</button>
          <button type="button" onClick={handleExit}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
export default PlayerForm;
