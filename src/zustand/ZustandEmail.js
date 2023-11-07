// ConfirmationStore.js
import create from 'zustand';

const useEmailStore = create((set) => ({
  email: null,
  setEmail: (email) => set({ email }),
}));

export default useEmailStore;