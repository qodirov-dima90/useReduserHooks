import React, { useReducer } from "react";

const initialValue = {
  firstCounter: 0,
  secondCounter: 0,
};
const reduser = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "dicrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "dicrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return { ...state, firstCounter: (state.firstCounter = 0) };
    case "reset2":
      return { ...state, secondCounter: (state.secondCounter = 0) };
    default:
      return state;
  }
};
function USeReduserHook() {
  const [count, dispatch] = useReducer(reduser, initialValue);
  return (
    <>
      <div>
        <p>{count.firstCounter}</p>
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 1 });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "dicrement", value: 1 });
          }}
        >
          dicrement
        </button>{" "}
        <button
          onClick={() => {
            dispatch({ type: "increment", value: 5 });
          }}
        >
          increment + 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "dicrement", value: 5 });
          }}
        >
          dicrement - 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          reset
        </button>
      </div>
      <div>
        <p>{count.secondCounter}</p>
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "dicrement2", value: 1 });
          }}
        >
          dicrement
        </button>{" "}
        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 5 });
          }}
        >
          increment + 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "dicrement2", value: 5 });
          }}
        >
          dicrement - 5
        </button>
        <button
          onClick={() => {
            dispatch({ type: "reset2" });
          }}
        >
          reset
        </button>
      </div>
    </>
  );
}

export default USeReduserHook;
