import { useCount } from "./count-context";

export const Counter = () => {
  const { dispatch } = useCount();
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </>
  );
};

export const CountDisplay = () => {
  const {
    state: { count },
  } = useCount();
  return <h1>The current count is: {count}</h1>;
};
