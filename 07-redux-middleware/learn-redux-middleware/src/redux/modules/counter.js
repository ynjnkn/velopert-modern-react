/* Initial State */
const initialState = 0;

/* Action Types */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/* Action Creators */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* Middlewares */
export const increaseAsyncMiddleware = () => (dispatch) => {
  console.log("+1 버튼 눌림");
  setTimeout(() => {
    console.log("1초");
    setTimeout(() => {
      console.log("2초");
      setTimeout(() => {
        console.log("3초");
        dispatch(increase());
      }, 1000);
    }, 1000);
  }, 1000);
};
export const decreaseAsyncMiddleware = () => (dispatch) => {
  console.log("-1 버튼 눌림");
  setTimeout(() => {
    console.log("1초");
    setTimeout(() => {
      console.log("2초");
      setTimeout(() => {
        console.log("3초");
        dispatch(decrease());
      }, 1000);
    }, 1000);
  }, 1000);
};

/* Reducer */
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
export default counter;
