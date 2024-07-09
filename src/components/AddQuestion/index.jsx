import styles from "./styles.module.css";
import { IconButton } from "rsuite";
import { HelpOutline } from "@rsuite/icons";

function AddQuestion() {
  const addBlankQuestion = () => {
    var arr = JSON.parse(localStorage.getItem("questionList") || "[]");

    const id = arr.length > 0 ? arr[arr.length - 1].id + 1 : 0;

    const question = {
      id: id,
      question: "Write your question here",
      answers: [
        "Answer 1",
        "Answer 2",
        "Answer 3",
        "Answer 4",
        "Answer 5",
        "Answer 6",
        "Answer 7",
        "Answer 8",
      ],
    };
    arr.push(question);
    localStorage.setItem("questionList", JSON.stringify(arr));
    window.location.reload();
  };

  return (
    <div>
      <IconButton
        className={styles.addButton}
        icon={<HelpOutline />}
        onClick={addBlankQuestion}
      ></IconButton>
    </div>
  );
}
export default AddQuestion;
