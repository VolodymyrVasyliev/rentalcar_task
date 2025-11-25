import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Car } from '@/types/car';

interface FavoritesState {
  favorites: Car[];
  addFavorite: (car: Car) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoritesStore = create(
  persist<FavoritesState>(
    (set) => ({
      favorites: [],
      addFavorite: (car) =>
        set((state) => ({
          favorites: [...state.favorites, car],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((car) => car.id !== id),
        })),
    }),
    {
      name: 'favorites-storage', // ключ у localStorage
    },
  ),
);
