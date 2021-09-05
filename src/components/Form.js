import DynamicInput from "./DynamicInput";
import useForm from "../useForm";
import "./style.css";

const Form = () => {
  const form = useForm({
    initialValues: { name: "", age: "" },
    schema: "formSchema",
    handleSubmitForm: (valueSubmit) => console.log(valueSubmit),
  });

  return (
    <>
      <DynamicInput
        form={form}
        typeInput="text"
        placeholder="name"
        nameInput="name"
      />
      <DynamicInput
        form={form}
        typeInput="text"
        placeholder="age"
        nameInput="age"
      />
      <button onClick={form.handleSubmit}>Submit</button>
    </>
  );
};

export default Form;
