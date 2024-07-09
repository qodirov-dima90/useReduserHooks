import React, { useReducer } from "react";

const intialCounter = 0;
// {
//   firstCounter: 0,
// };
const reduser = (state, action) => {
  switch (action) {
    case "incrment":
      return state + 1;
    case "dicrement":
      return state - 1;
    case "incrment5":
      return state + 5;
    case "dicrement5":
      return state - 5;
    case "reset":
      return intialCounter;
    default:
      return state;
  }
};
function Reduser() {
  const [count, dispatch] = useReducer(reduser, intialCounter);
  const [count1, dispatch1] = useReducer(reduser, intialCounter);
  return (
    <>
      <div>
        <p>Counter: {count}</p>
        <button
          onClick={() => {
            dispatch("incrment");
          }}
        >
          Incrment
        </button>
        <button
          onClick={() => {
            dispatch("dicrement");
          }}
        >
          Dicrement
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <p>Counter: {count1}</p>
        <button
          onClick={() => {
            dispatch1("incrment5");
          }}
        >
          Incrment5
        </button>
        <button
          onClick={() => {
            dispatch1("dicrement5");
          }}
        >
          Dicrement5
        </button>
        <button
          onClick={() => {
            dispatch1("reset");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Reduser;
