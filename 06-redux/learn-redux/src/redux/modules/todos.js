/* Initial State */
// initialState = [todo1, todo2, todo3, ... ]
// const initialState = [
//   // 각 todo의 데이터 구조
//   {
//     id: Date.now(),
//     text: "예시",
//     done: false,
//   },
// ];

const initialState = [];

/* Action Types */
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

/* Action Creators */
// let nextId = 1; // todo 데이터에서 사용할 고유 키
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: Date.now(),
    text,
    done: false,
  },
});
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

/* Reducer */
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      // state안에 있는 각 todo에 대해 id가 일치하면 done 값을 반전시키고, 그렇지 않다면 그대로 둠
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

export default todos;
