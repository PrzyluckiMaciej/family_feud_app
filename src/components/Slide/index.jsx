import styles from "./styles.module.css";
import { useState } from "react";
import { IconButton } from "rsuite";
import { Trash, Edit } from "@rsuite/icons";
import Answers from "../Answers";

const Slide = (props) => {
  const [question, setQuestion] = useState(props.question);
  const [editingOn, setEditingOn] = useState(false);

  const handleDeleteQuestion = () => {
    var data = JSON.parse(localStorage.getItem("questionList"));
    data = data.filter((i) => i.id !== question.id);
    localStorage.setItem("questionList", JSON.stringify(data));
    window.location.reload();
  };

  const handleEditQuestion = () => {
    if (editingOn) {
      handleSubmit();
    }
    setEditingOn(!editingOn);
  };

  const handleChange = ({ currentTarget: input }) => {
    setQuestion({ ...question, [input.name]: input.value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
      setEditingOn(!editingOn);
    }
  };

  const handleSubmit = () => {
    var arr = JSON.parse(localStorage.getItem("questionList") || "[]");
    arr.find((o, i) => {
      if (o.id === question.id) {
        arr[i] = question;
        return true;
      }
      return false;
    });
    localStorage.setItem("questionList", JSON.stringify(arr));
  };

  return (
    <div className={styles.slide}>
      <div className={styles.topBar}>
        {editingOn ? (
          <textarea
            type="text"
            name="question"
            className={`${styles.question} ${styles.input}`}
            value={question.question}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          ></textarea>
        ) : (
          <p className={styles.question}>{question.question}</p>
        )}
        <div className={styles.buttons}>
          <IconButton
            className={styles.button}
            icon={<Edit />}
            onClick={handleEditQuestion}
          ></IconButton>
          <IconButton
            className={styles.button}
            icon={<Trash />}
            onClick={handleDeleteQuestion}
          ></IconButton>
        </div>
      </div>
      <Answers
        question={question}
        editingOn={editingOn}
        keyPress={handleKeyPress}
      />
    </div>
  );
};
export default Slide;
