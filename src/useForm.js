import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  setInitialValues,
  handleSubmit,
  changeValues,
  addTouches,
  addErrors,
  addSchema,
  resetForm,
  selectFormValue,
  selectFormTouch,
  selectFormError,
  selectFormSubmit,
} from "./redux/form/slice";

const useForm = ({ initialValues, schema, handleSubmitForm }) => {
  const dispatch = useDispatch();

  const valueSubmit = useSelector(selectFormSubmit);

  useEffect(() => {
    dispatch(setInitialValues(initialValues));
  }, [dispatch]);

  useEffect(() => {
    dispatch(addSchema(schema));
  }, [dispatch]);

  useEffect(() => {
    if (valueSubmit !== null) {
      handleSubmitForm(valueSubmit);
      dispatch(resetForm());
    }
  }, [valueSubmit, dispatch]);

  return {
    handleSubmit: () => {
      dispatch(handleSubmit());
    },
    changeValues: (name, value) => dispatch(changeValues(name, value)),
    addTouches: (name, touch) => dispatch(addTouches(name, touch)),
    addErrors: (name, error) => dispatch(addErrors(name, error)),
    useValueInput: (name) => {
      return useSelector(selectFormValue(name));
    },
    useValueTouch: (touch) => {
      return useSelector(selectFormTouch(touch));
    },
    useValueError: (error) => {
      return useSelector(selectFormError(error));
    },
  };
};

export default useForm;
