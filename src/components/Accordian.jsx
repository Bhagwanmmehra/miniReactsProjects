import { useState } from "react";
import styles from "../style/Accordian.module.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function Accordian(props) {
  const { contents } = props;

  const [open, setOpen] = useState(false);
  // open == null>all closed
  // open == 1> ist row is open
  // isOpen

  function handleClick(index) {
    setOpen((currState) => (currState === index ? null : index));
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
            isOpen={open === index}
          />
        );
      })}
    </div>
  );
}

function Row(props) {
  const { title, details, handleClick, index, isOpen } = props;

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
export default Accordian;
