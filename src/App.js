import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { onIncrement , onDecrement } from "./actions";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const date = useSelector((state)=> state.date);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        Counter:{counter}{" "}
        <button
          onClick={() => {
            dispatch(onIncrement());
          }}
        >
          +
        </button>{" "}
        <button
          onClick={() => {
            dispatch(onDecrement());
          }}
        >
          -
        </button>{" "}
      </p>
      Date:{date}
    </div>
  );
}
