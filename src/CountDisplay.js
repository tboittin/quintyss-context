import { useCount } from "./count-context";

export const CountDisplay = () => {
  const {
    state: { count },
  } = useCount();
  return <h1>The current count is: {count}</h1>;
};
