import React, { useEffect } from "react";

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  const onChange = (event) => {
    onSetDiff(parseInt(event.target.value));
  };
  return (
    <div>
      <h1>Current Value: {number}</h1>
      {!diff && diff !== 0 ? (
        <h1>Difference: 숫자를 입력해주세요</h1>
      ) : (
        <h1>Difference: {diff}</h1>
      )}
      <div>
        {/* <input type="number" defaultValue={diff} onChange={onChange} /> */}
        <input type="number" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
