import React from "react";

const intialCounter = {
  firstCounter: 0,
};
const reduser = (state, action) => {
  switch (action) {
    case "incrment":
      return state + 1;
    case "dicrement":
      return state - 1;
    case "reset":
      return intialCounter;
    default:
      return state;
  }
};
function useReduser() {
  const { count, dispatch } = useReduser(reduser, intialCounter);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch("increment")}>Incrment</button>
      <button onClick={() => dispatch("dicrement")}>Dicrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default useReduser;
