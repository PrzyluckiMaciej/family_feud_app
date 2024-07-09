import styles from "./styles.module.css";
import { useState } from "react";

const Answers = (props) => {
  var [question, setQuestion] = useState(props.question);

  const handleChange = ({ currentTarget: input }) => {
    let answers = question.answers;
    answers[input.name] = input.value;
    setQuestion({ ...question, answers: answers });
  };

  return (
    <div>
      {props.editingOn ? (
        <table className={styles.answerTable}>
          <tr>
            <td className={styles.leftCell}>
              <input
                name="0"
                value={question.answers[0]}
                onChange={handleChange}
                onKeyDown={props.keyPress}
              ></input>
            </td>

            <td>
              <input
                name="4"
                value={question.answers[4]}
                onChange={handleChange}
                onKeyDown={props.keyPress}
              ></input>
            </td>
          </tr>
          <tr>
            <td className={styles.leftCell}>
              <input
                name="1"
                value={question.answers[1]}
                onChange={handleChange}
                onKeyDown={props.keyPress}
              ></input>
            </td>

            <td>
              <input
                name="5"
                value={question.answers[5]}
                onChange={handleChange}
                onKeyDown={props.keyPress}
              ></input>
            </td>
          </tr>
          <tr>
            <td className={styles.leftCell}>
              <input
                name="2"
                value={question.answers[2]}
                onChange={handleChange}
                onKeyDown={props.keyPress}
              ></input>
            </td>

            <td>
              <input
                name="6"
                value={question.answers[6]}
                onChange={handleChange}
                onKeyDown={props.keyPress}
              ></input>
            </td>
          </tr>
          <tr>
            <td className={`${styles.leftCell} ${styles.bottomCell}`}>
              <input
                name="3"
                value={question.answers[3]}
                onChange={handleChange}
                onKeyDown={props.keyPress}
              ></input>
            </td>

            <td className={styles.bottomCell}>
              <input
                name="7"
                value={question.answers[7]}
                onChange={handleChange}
                onKeyDown={props.keyPress}
              ></input>
            </td>
          </tr>
        </table>
      ) : (
        <table className={styles.answerTable}>
          <tr>
            <td className={styles.leftCell}>{question.answers[0]}</td>
            <td>{question.answers[4]}</td>
          </tr>
          <tr>
            <td className={styles.leftCell}>{question.answers[1]}</td>
            <td>{question.answers[5]}</td>
          </tr>
          <tr>
            <td className={styles.leftCell}>{question.answers[2]}</td>
            <td>{question.answers[6]}</td>
          </tr>
          <tr>
            <td className={`${styles.leftCell} ${styles.bottomCell}`}>
              {question.answers[3]}
            </td>
            <td className={styles.bottomCell}>{question.answers[7]}</td>
          </tr>
        </table>
      )}
    </div>
  );
};
export default Answers;
