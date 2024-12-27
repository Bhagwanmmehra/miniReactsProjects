import { useState } from "react";
import styles from "../style/Accordian.module.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function AccordionV2(props) {
  const { contents } = props;

  const [open, setOpen] = useState(new Array(contents.length).fill(false));
  // open == null>all closed
  // open == 1> ist row is open
  // isOpen

  function handleClick(index) {
    console.log(index);
    setOpen(function (currState) {
      currState[index] = !currState[index];
      return [...currState];
    });
  }

  return (
    <div className={styles.container}>
      {contents.map(function (content, index) {
        return (
          <Row
            title={content.title}
            details={content.details}
            key={index}
            handleClick={handleClick}
            index={index}
            isOpen={open[index]}
          />
        );
      })}
    </div>
  );
}

function Row(props) {
  const { title, details, handleClick, index, isOpen } = props;
  console.log("From Row", index, isOpen);

  return (
    <div className={styles.row}>
      <h3 className={styles.title} onClick={() => handleClick(index)}>
        {title}
        <span>{isOpen ? <HiChevronDown /> : <HiChevronUp />}</span>
      </h3>
      {isOpen && <p className={styles.details}>{details}</p>}
    </div>
  );
}
export default AccordionV2;
