import { Provider } from "react-redux";
import store from "./redux";
import Form from "./components/Form";
import rootSchema from "./yup-schema";
import ValidateForm from "./components/ValidateForm";

const App = () => {
  return (
    <Provider store={store}>
      <Form />
      <ValidateForm rootSchema={rootSchema} />
    </Provider>
  );
};

export default App;
