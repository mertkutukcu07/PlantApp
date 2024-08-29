import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
  isOnboardingCompleted: boolean;
}

const initialState: OnboardingState = {
  isOnboardingCompleted: false,
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      state.isOnboardingCompleted = action.payload;
    },
  },
});

export const { setOnboardingCompleted } = onboardingSlice.actions;

export default onboardingSlice.reducer;
