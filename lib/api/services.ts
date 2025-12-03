import axios from 'axios';
import { Car, CarsResponse } from '@/types/car';
import { api } from './api';
import { Brand, BrandList } from '@/types/brands';

interface GetCarsParams {
  page?: number;
  limit?: number;
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
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

export const getBrand = async () => {
  const res = await api.get<Brand[]>('/brands');
  return res.data;
};
