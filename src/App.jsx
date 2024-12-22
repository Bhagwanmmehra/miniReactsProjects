import Textexpander from "./assets/Textexpander";
import "./App.css";
import Card from "./assets/Card";

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
    </div>
  );
}

export default App;
