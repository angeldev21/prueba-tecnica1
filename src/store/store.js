import { create } from 'zustand'

export const useStoreForm = create((set) => ({
  formValues: {},
  phase: 1,
  setFormValues: (values) => set((state) => ({ formValues: { ...state.formValues, ...values } })),
  setPhase: () => set((state) => ({ phase: state.phase + 1 })),
}))