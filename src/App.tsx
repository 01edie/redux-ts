import { Provider } from "react-redux";
import "./App.css";
import { actionCreators, store } from "./store";
import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Search Package</h3>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
