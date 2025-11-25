import { Car } from '@/types/car';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FiltersState {
  brand: string;
  rentalPrice: string;
  minMileage: number;
  maxMileage: number;
  page: number;
  limit: number;
  setBrand: (brand: string) => void;
  setPrice: (rentalPrice: string) => void;
  setMinMileage: (value: number) => void;
  setMaxMileage: (value: number) => void;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  brand: '',
  rentalPrice: '0',
  minMileage: 0,
  maxMileage: 0,
  page: 1,
  limit: 12,
  setBrand: (brand) => set({ brand }),
  setPrice: (rentalPrice) => set({ rentalPrice }),
  setMinMileage: (minMileage) => set({ minMileage }),
  setMaxMileage: (maxMileage) => set({ maxMileage }),
  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),
}));
