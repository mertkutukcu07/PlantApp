import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '~/services/categories';
import { CategoriesResponse, CategoriesState } from '~/services/types/response/categories';

const initialState: CategoriesState = {
  categories: [],
  status: 'idle',
  error: null,
};

export const fetchCategories = createAsyncThunk<CategoriesResponse, void, { rejectValue: string }>(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      return await getCategories();
    } catch (error) {
      return rejectWithValue('Kategoriler yüklenirken bir hata oluştu.');
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.categories = action.payload.data;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload ?? 'Bilinmeyen bir hata oluştu.';
    });
  },
});

export default categoriesSlice.reducer;
