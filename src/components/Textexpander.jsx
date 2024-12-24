import { useState } from "react";

const textStyle = {
  maxWidth: "40rem",
};

const btnStyle = {
  border: "none",
  backgroundColor: "transparent",
  marginLeft: "0.5rem",
  color: "blue",
  cursor: "pointer",
};

const rawText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tenetur
        expedita perferendis at blanditiis, neque exercitationem quo quasi
        excepturi consequuntur non similique, provident, facere quibusdam
        doloribus et reprehenderit consequatur aliquam! Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Quam unde error exercitationem id
        cumque quisquam facere atque amet quis, vitae, facilis ullam. Quod
        voluptate iste vitae corporis. Eos, magnam ducimus. Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Inventore praesentium ad ab, a
        nihil ipsa, incidunt repellendus dolor et quia ex dolorem earum
        repudiandae dicta nemo provident quisquam optio! Odit.`;

function Textexpander() {
  const [show, setShow] = useState(false);
  const text = show ? rawText : rawText.slice(0, 100);

  function handleClick() {
    setShow((show) => !show);
  }
  return (
    <div style={textStyle}>
      <span>{text}</span>
      <button style={btnStyle} onClick={handleClick}>
        {show ? "show less " : "show more"}
      </button>
    </div>
  );
}

export default Textexpander;
