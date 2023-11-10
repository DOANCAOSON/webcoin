import create from 'zustand';

export const useCounterStore = create(set => ({
    count: 0,
    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1})),
}));


export const GmailStore = create(set => ({
    gmail: '',
    updateGmail: value => set(state => ({...state, gmail: value})),
  }));
  