import { createSlice } from "@reduxjs/toolkit";

const name = "animal";

const initialState = {
  form: {
    fields: {
      common_name: "",
      scientific_name: "",
    },
  },
};

const reducers = {
  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const { setFormField } = slice.actions;

export default slice.reducer;
