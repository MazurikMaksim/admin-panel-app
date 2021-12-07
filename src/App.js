import "../src/styles/reset.css";
import "../src/styles/style.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import ModalForm from "./components/ModalForm/ModalForm";
import { MainTable } from "./components/OrderTable/MainTable";

function App() {
    
  return (
    <Provider store={store}>
      <ModalForm />
      <MainTable />
    </Provider>
  );
}

export default App;
