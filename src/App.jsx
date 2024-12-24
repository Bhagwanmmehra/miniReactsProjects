import Textexpander from "./components/Textexpander";
import "./App.css";
import Card from "./components/Card";
import DateCounter from "./components/DateCounter";

const appStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "4rem",
  justifyContent: "center",
  padding: "4rem 0",
};

function App() {
  return (
    <div style={appStyle}>
      <Card />
      <Textexpander />
      <DateCounter />
    </div>
  );
}

export default App;
