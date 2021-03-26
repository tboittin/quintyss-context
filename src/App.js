import { CountProvider } from "./count-context";
import { CountDisplay } from "./CountDisplay";
import { Counter } from "./Counter";

const App = () => {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
};

export default App;
