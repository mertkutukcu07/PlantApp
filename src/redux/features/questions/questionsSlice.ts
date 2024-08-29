import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestions } from '~/services/questions';
import { QuestionsResponse, QuestionsState } from '~/services/types/response/questions';

const initialState: QuestionsState = {
  questions: [],
  status: 'idle',
  error: null,
};

export const fetchQuestions = createAsyncThunk<QuestionsResponse, void, { rejectValue: string }>(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      return await getQuestions();
    } catch (error) {
      return rejectWithValue('Sorular yüklenirken bir hata oluştu.');
    }
  }
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Bilinmeyen bir hata oluştu.';
      });
  },
});

export default questionsSlice.reducer;
