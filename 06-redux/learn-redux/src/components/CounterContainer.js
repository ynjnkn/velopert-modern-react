import React from "react";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setDiff } from "../redux/modules/counter";

const CounterContainer = () => {
  /*
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  */
  const number = useSelector((state) => state.counter.number);
  const diff = useSelector((state) => state.counter.diff);

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
