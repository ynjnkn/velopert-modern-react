import React from "react";
import CounterContainer from "./components/CounterContainer";

function App({ store }) {
  console.log({ store: store.getState() });
  return (
    <div>
      <CounterContainer />
    </div>
  );
}

export default App;
