import React, { useState } from "react";
import CounterContainer from "./components/CounterContainer";
import TodosContainer from "./components/TodosContainer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function App() {
  const options = ["counter", "todos"];
  const defaultOption = options[0];

  const [mode, setMode] = useState(options[0]);

  const selectModeHandler = (event) => {
    setMode(event.value);
  };

  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );

  /*
  return (
    <div>
      <div>기능 선택</div>
      <Dropdown
        options={options}
        onChange={selectModeHandler}
        defaultValue={options[0]}
        placeholder={options[0]}
      />
      {mode === "counter" ? <CounterContainer /> : <TodosContainer />}
    </div>
  );
  */
}

export default App;
