import { INCREMENT, DECREMENT } from "../actions/types";

export default function (state = { counter: 0, date: Date.now }, action) {
  console.log(action, "action");
  console.log(state, "state");

  if (action.type == INCREMENT) {
    return { ...state, counter: state.counter + 1, date: action.date };
  }
  if (action.type == DECREMENT) {
    return { ...state, counter: state.counter - 1, date: action.date };
  } else {
    return state;
  }
}
