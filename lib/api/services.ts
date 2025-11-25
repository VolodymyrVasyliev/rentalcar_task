import axios from 'axios';
import { Car, CarsResponse } from '@/types/car';
import { api } from './api';

interface GetCarsParams {
  page?: number;
  limit?: number;
  brand?: string;
  rentalPrice?: string;
  minMileage?: number;
  maxMileage?: number;
}

export const getCar = async (params: GetCarsParams) => {
  const res = await api.get<CarsResponse>(`/cars`, {
    params: {
      page: params.page,
      limit: params.limit,
      brand: params.brand,
      rentalPrice: params.rentalPrice,
      minMileage: params.minMileage,
      maxMileage: params.maxMileage,
    },
  });

  return res.data.cars;
};

export const getCarById = async (id: string): Promise<Car> => {
  const res = await api.get<Car>(`/cars/${id}`);
  return res.data;
};
