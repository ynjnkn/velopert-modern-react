/* Initial State */
const initialState = {
  number: 0,
  diff: 1,
};

/* Action Types */
// Ducks 패턴을 따를 땐 액션의 이름에 접두사를 넣을 것 (다른 모듈과 액션 이름이 중복되는 것을 방지)
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/* Action Creators */
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* Reducer */
// Reducer는 export default로 내보낼 것
const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
};
export default counter;
