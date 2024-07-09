import styles from "./styles.module.css";
import { useState } from "react";

const Answers = (props) => {
  const [question, setQuestion] = useState(props.question);
  const [covers, setCovers] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleChange = ({ currentTarget: input }) => {
    let answers = question.answers;
    answers[input.name] = input.value;
    setQuestion({ ...question, answers: answers });
    console.log(input.name);
  };

  const handleCover = (index) => {
    let newCovers = [...covers];
    newCovers[index] = !covers[index];
    setCovers(newCovers);
    console.log(covers[index]);
  };

  return (
    <div>
      {props.editingOn ? (
        <table className={styles.answerTableEditable}>
          <tbody>
            <tr>
              <td className={styles.leftCell}>
                <textarea
                  name="0"
                  value={question.answers[0]}
                  onChange={handleChange}
                  onKeyDown={props.keyPress}
                ></textarea>
              </td>

              <td>
                <textarea
                  name="4"
                  value={question.answers[4]}
                  onChange={handleChange}
                  onKeyDown={props.keyPress}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td className={styles.leftCell}>
                <textarea
                  name="1"
                  value={question.answers[1]}
                  onChange={handleChange}
                  onKeyDown={props.keyPress}
                ></textarea>
              </td>

              <td>
                <textarea
                  name="5"
                  value={question.answers[5]}
                  onChange={handleChange}
                  onKeyDown={props.keyPress}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td className={styles.leftCell}>
                <textarea
                  name="2"
                  value={question.answers[2]}
                  onChange={handleChange}
                  onKeyDown={props.keyPress}
                ></textarea>
              </td>

              <td>
                <textarea
                  name="6"
                  value={question.answers[6]}
                  onChange={handleChange}
                  onKeyDown={props.keyPress}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td className={`${styles.leftCell} ${styles.bottomCell}`}>
                <textarea
                  name="3"
                  value={question.answers[3]}
                  onChange={handleChange}
                  onKeyDown={props.keyPress}
                ></textarea>
              </td>

              <td className={styles.bottomCell}>
                <textarea
                  name="7"
                  value={question.answers[7]}
                  onChange={handleChange}
                  onKeyDown={props.keyPress}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className={styles.answerTable}>
          <tbody>
            <tr>
              <td
                name="0"
                className={styles.leftCell}
                onClick={() => handleCover(0)}
              >
                {covers[0] ? (
                  question.answers[0] !== "" ? (
                    <div className={styles.numberBox}>1</div>
                  ) : null
                ) : (
                  <div>{question.answers[0]}</div>
                )}
              </td>

              <td name="4" onClick={() => handleCover(4)}>
                {covers[4] ? (
                  question.answers[4] !== "" ? (
                    <div className={styles.numberBox}>5</div>
                  ) : null
                ) : (
                  <div>{question.answers[4]}</div>
                )}
              </td>
            </tr>
            <tr>
              <td
                name="1"
                className={styles.leftCell}
                onClick={() => handleCover(1)}
              >
                {covers[1] ? (
                  question.answers[1] !== "" ? (
                    <div className={styles.numberBox}>2</div>
                  ) : null
                ) : (
                  <div>{question.answers[1]}</div>
                )}
              </td>

              <td name="5" onClick={() => handleCover(5)}>
                {covers[5] ? (
                  question.answers[5] !== "" ? (
                    <div className={styles.numberBox}>6</div>
                  ) : null
                ) : (
                  <div>{question.answers[5]}</div>
                )}
              </td>
            </tr>
            <tr>
              <td
                name="2"
                className={styles.leftCell}
                onClick={() => handleCover(2)}
              >
                {covers[2] ? (
                  question.answers[2] !== "" ? (
                    <div className={styles.numberBox}>3</div>
                  ) : null
                ) : (
                  <div>{question.answers[2]}</div>
                )}
              </td>

              <td name="6" onClick={() => handleCover(6)}>
                {covers[6] ? (
                  question.answers[6] !== "" ? (
                    <div className={styles.numberBox}>7</div>
                  ) : null
                ) : (
                  <div>{question.answers[6]}</div>
                )}
              </td>
            </tr>
            <tr>
              <td
                name="3"
                className={`${styles.leftCell} ${styles.bottomCell}`}
                onClick={() => handleCover(3)}
              >
                {covers[3] ? (
                  question.answers[3] !== "" ? (
                    <div className={styles.numberBox}>4</div>
                  ) : null
                ) : (
                  <div>{question.answers[3]}</div>
                )}
              </td>

              <td
                name="7"
                className={styles.bottomCell}
                onClick={() => handleCover(7)}
              >
                {covers[7] ? (
                  question.answers[7] !== "" ? (
                    <div className={styles.numberBox}>8</div>
                  ) : null
                ) : (
                  <div>{question.answers[7]}</div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Answers;
