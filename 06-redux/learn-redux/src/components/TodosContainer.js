import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "./Todos";
import { addTodo, toggleTodo } from "../redux/modules/todos";

const TodosContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = (id) => dispatch(toggleTodo(id));

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};
export default TodosContainer;
