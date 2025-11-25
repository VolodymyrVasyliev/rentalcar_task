import { create } from 'zustand';
import { Car } from '@/types/car';

interface CarsState {
  cars: Car[];
  isLoading: boolean;
  error: string | null;
  setCars: (cars: Car[]) => void;
  resetCars: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useCarsStore = create<CarsState>((set) => ({
  cars: [],
  isLoading: false,
  error: null,
  setCars: (cars) => set({ cars }),
  resetCars: () => set({ cars: [] }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));
