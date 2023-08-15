import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const usePublicOfferModal = create<ModalState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useCookieModal = create<ModalState>((set) => ({
  isOpen: true,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
