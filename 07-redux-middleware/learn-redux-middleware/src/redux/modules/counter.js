/* Initial State */
const initialState = 0;

/* Action Types */
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/* Action Creators */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

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
