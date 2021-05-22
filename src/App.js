import { Provider as ReduxProvider } from "react-redux";
import "./App.css";
import ToDo from "./pages/Todo.page";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
console.log(reduxStore);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <ToDo />
      </div>
    </ReduxProvider>
  );
}

export default App;
