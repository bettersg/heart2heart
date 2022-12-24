import create, { StateCreator } from 'zustand';

export interface ModalState {
  isSignupModalOpen: boolean;
  setSignupModalOpen: () => void;
  setSignupModalClose: () => void;

  isNoticeModalOpen: boolean;
  setNoticeModalOpen: () => void;
  setNoticeModalClose: () => void;
}

const createModalState: StateCreator<ModalState, [], [], ModalState> = (
  set
) => ({
  isSignupModalOpen: false,
  setSignupModalOpen: () => set(() => ({ isSignupModalOpen: true })),
  setSignupModalClose: () => set(() => ({ isSignupModalOpen: false })),

  isNoticeModalOpen: true,
  setNoticeModalOpen: () => set(() => ({ isNoticeModalOpen: true })),
  setNoticeModalClose: () => set(() => ({ isNoticeModalOpen: false })),
});

export const useGlobalStore = create<ModalState>()((...a) => ({
  ...createModalState(...a),
}));
