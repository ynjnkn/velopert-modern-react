import { createStore } from "redux";

// Initial States
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// Action Types
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// Actions
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const changeText = (text) => ({ type: CHANGE_TEXT, text });
const addToList = (item) => ({ type: ADD_TO_LIST, item });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("스토어", store.getState());

const listener = () => {
  const state = store.getState();
  console.log("스토어 업데이트", state);
};

const unsubscribe = store.subscribe(listener);
// unsubscribe();

console.log("INCREASE 실행");
store.dispatch(increase());
console.log("DECREASE 실행");
store.dispatch(decrease());
console.log("CHANGE_TEXT 실행");
store.dispatch(changeText("안녕하세요."));
console.log("ADD_TO_LIST 실행");
store.dispatch(addToList({ id: 1, text: "와우" }));
