import React, { useEffect } from "react";

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  const onChange = (event) => {
    onSetDiff(parseInt(event.target.value));
  };
  return (
    <div>
      <div>Current Value: {number}</div>
      {!diff && diff !== 0 ? (
        <div>Difference: 숫자를 입력해주세요</div>
      ) : (
        <div>Difference: {diff}</div>
      )}
      <div>
        <input type="number" defaultValue={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
};

export default Counter;
