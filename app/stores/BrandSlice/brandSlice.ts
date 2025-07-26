import { formBikinBrandSchema } from '@/app/types/form';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { set } from 'lodash';

interface BrandFormState {
  currentForm: Partial<formBikinBrandSchema>;
}

const initialState: BrandFormState = {
  currentForm: {},
};

const formBrandSlice = createSlice({
  name: 'Brand',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<{ path: string; value: any }>) => {
      set(state.currentForm, action.payload.path, action.payload.value);
    },
    resetForm(state) {
      state.currentForm = {};
    },
  },
});

export const { updateForm, resetForm } = formBrandSlice.actions;
export default formBrandSlice.reducer;
