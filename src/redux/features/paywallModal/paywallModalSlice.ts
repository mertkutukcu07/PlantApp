import { createSlice } from '@reduxjs/toolkit';

interface PaywallModalState {
  isOpen: boolean;
}

const initialState: PaywallModalState = {
  isOpen: false,
};

const paywallModalSlice = createSlice({
  name: 'paywallModal',
  initialState,
  reducers: {
    openPaywallModal: (state) => {
      state.isOpen = true;
    },
    closePaywallModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPaywallModal, closePaywallModal } = paywallModalSlice.actions;

export default paywallModalSlice.reducer;
