import { INCREMENT, DECREMENT } from "./types";

// Action creator
export const onIncrement = () => ({ type: INCREMENT, date: Date.now() });

export const onDecrement = () => ({ type: DECREMENT, date: Date.now() });
