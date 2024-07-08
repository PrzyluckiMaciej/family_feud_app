import styles from "./styles.module.css";
import { useState } from "react";
import { IconButton } from "rsuite";
import { Trash } from "@rsuite/icons";

const Slide = (props) => {
  var [question, setQuestion] = useState(props.question);

  const handleDeleteQuestion = () => {
    var data = JSON.parse(localStorage.getItem("questionList"));
    data = data.filter(i => i.id !== question.id);
    localStorage.setItem("questionList", JSON.stringify(data));
    window.location.reload();
  }

  return (
    <div className={styles.slide}>
      <IconButton
        className={styles.deleteButton}
        icon={<Trash />}
        onClick={handleDeleteQuestion}
      ></IconButton>
      <h1>{question.question}</h1>
    </div>
  );
};
export default Slide;
