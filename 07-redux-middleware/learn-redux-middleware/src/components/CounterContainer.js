import React from "react";
import Counter from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAsyncMiddleware,
  decreaseAsyncMiddleware,
} from "../redux/modules/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsyncMiddleware());
  };

  const onDecrease = () => {
    dispatch(decreaseAsyncMiddleware());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
