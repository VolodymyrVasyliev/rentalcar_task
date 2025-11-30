'use client';
import { Car } from '@/types/car';
import css from './CatalogFilter.module.css';
import { Brand, BrandList } from '@/types/brands';
import { useEffect, useState } from 'react';
import { getBrand } from '../../lib/api/services';

type Props = {
  cars: Car[];
  onSearch: (filters: { selectedBrand: string; rentalPrice: string }) => void;
};

const CatalogFilter = ({ cars, onSearch }: Props) => {
  const [brand, setBrand] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | ''>('');

  const [rentalPrice, setRentalPrice] = useState<string | ''>('');

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getBrand();
      setBrand(data);
    };

    fetchBrands();
  }, []);

  return (
    <div className={css.filterGroup}>
      {/* Category: Brand */}
      <div className={css.selectWrapper}>
        <label className={css.label} htmlFor="brand">
          Car brand
        </label>
        <select
          className={css.select}
          id="brand"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="" disabled>
            Choose a brand
          </option>

          {brand.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Category: Price */}
      <div className={css.selectWrapper}>
        <label className={css.label} htmlFor="price">
          Price / 1 hour
        </label>

        <select
          className={css.select}
          id="price"
          onChange={(e) => setRentalPrice(e.target.value)}
        >
          <option value="" disabled>
            Choose a price
          </option>

          {cars.map((cars) => (
            <option key={cars.id}>{cars.rentalPrice}</option>
          ))}
        </select>
      </div>

      {/* Category: Mileage */}
      <div className={css.selectWrapper}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.rangeWrapper}>
          <input type="number" className={css.fromInput} placeholder="From" />
          <input type="number" className={css.toInput} placeholder="To" />
        </div>
      </div>
      <div className={css.buttonWrapper}>
        <button
          className={css.searchButton}
          onClick={() => onSearch({ selectedBrand, rentalPrice })}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default CatalogFilter;
