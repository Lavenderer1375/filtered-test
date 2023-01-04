import Aside from "./components/Aside";
import TableComp from "./components/TableComp";
import store from "./components/store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <div className="App flex w-screen cursor-pointer">
      <Aside />
      <TableComp />
    </div>
    </Provider>
  );
}

export default App;
