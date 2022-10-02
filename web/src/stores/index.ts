import create, { StateCreator } from 'zustand';

export interface SignupModalState {
  isSignupModalOpen: boolean;
  setSignupModalOpen: () => void;
  setSignupModalClose: () => void;
}

const createSignupModalState: StateCreator<
  SignupModalState,
  [],
  [],
  SignupModalState
> = (set) => ({
  isSignupModalOpen: false,
  setSignupModalOpen: () => set(() => ({ isSignupModalOpen: true })),
  setSignupModalClose: () => set(() => ({ isSignupModalOpen: false })),
});

export const useGlobalStore = create<SignupModalState>()((...a) => ({
  ...createSignupModalState(...a),
}));
