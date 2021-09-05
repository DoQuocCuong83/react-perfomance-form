import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {},
  errors: {},
  valueSubmit: null,
  touches: {},
  schema: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setInitialValues(state, action) {
      state.values = action.payload;
    },
    changeValues(state, action) {
      state.values[action.payload.name] = action.payload.value;
    },
    addTouches(state, action) {
      state.touches[action.payload.name] = action.payload.value;
    },
    addErrors(state, action) {
      state.errors[action.payload.name] = action.payload.value;
    },
    addAllErrors(state, action) {
      state.errors = action.payload;
    },
    resetErrors(state) {
      state.errors = {};
    },
    addSchema(state, action) {
      state.schema = action.payload;
    },
    handleSubmit(state) {
      if (Object.keys(state.errors).length === 0)
        state.valueSubmit = { ...state.values };
    },
    resetForm(state) {
      state.values = {};
      state.errors = {};
      state.valueSubmit = null;
      state.touches = {};
    },
  },
});

export const {
  setInitialValues,
  changeValues,
  addTouches,
  addErrors,
  addAllErrors,
  addSchema,
  resetErrors,
  handleSubmit,
  resetForm,
} = formSlice.actions;

export const selectFormValue = (name) => (state) => state.form.values[name];
export const selectFormTouch = (touch) => (state) => state.form.touches[touch];
export const selectFormError = (error) => (state) => state.form.errors[error];
export const selectFormSubmit = (state) => state.form.valueSubmit;
export const selectSchema = (state) => state.form.schema;
export const selectAllValues = (state) => state.form.values;

export default formSlice.reducer;
