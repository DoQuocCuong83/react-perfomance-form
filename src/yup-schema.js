import * as Yup from "yup";

const concatMessageError = (key, message) => {
  return `${key}:${message}`;
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required(concatMessageError("name", "VALIDATION.LOGIN.NAME.REQUIRED"))
    .max(10, concatMessageError("name", "VALIDATION.LOGIN.NAME.MAX")),
  age: Yup.string().required(
    concatMessageError("age", "VALIDATION.LOGIN.AGE.REQUIRED")
  ),
});

const rootSchema = {
  formSchema,
};

export default rootSchema;
