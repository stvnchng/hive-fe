import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const items = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Bob Dob",
    "Carrot Potato",
  ];
  const ages = ["Twenty", "Twenty one", "Twenty one and a half"];

  return (
    <div className="App">
      <Dropdown label="Tag" items={items} multiple />
      <Dropdown label="Age" items={ages} multiple={false} />
    </div>
  );
}

export default App;
