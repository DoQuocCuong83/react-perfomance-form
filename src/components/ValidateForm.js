import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  addAllErrors,
  resetErrors,
  selectAllValues,
  selectSchema,
} from "../redux/form/slice";

const splitMessage = (message) => {
  return message.split(":");
};

const ValidateForm = ({ rootSchema }) => {
  const dispatch = useDispatch();

  const values = useSelector(selectAllValues);
  const schema = useSelector(selectSchema);

  useEffect(() => {
    if (schema)
      rootSchema[schema].validate(values, { abortEarly: false }).then(
        (res) => {
          dispatch(resetErrors());
        },
        (err) => {
          const errors = {};
          err.errors.forEach((item) => {
            const [key, message] = splitMessage(item);
            errors[key] = message;
          });
          dispatch(addAllErrors(errors));
        }
      );
  }, [values]);

  return <></>;
};

export default ValidateForm;
