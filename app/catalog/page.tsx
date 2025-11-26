'use client';
import { getCar } from '@/lib/api/services';
import css from '@/app/catalog/catalog.module.css';
import CarList from '@/components/CarList/CarList';
import CatalogFilter from '@/components/CatalogFilter/CatalogFilter';
import { useEffect, useState } from 'react';
import { Car } from '@/types/car';

const Catalog = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);

  const [brand, setBrand] = useState<string | undefined>();
  const [rentalPrice, setRentalPrice] = useState<string | undefined>();
  const [minMileage, setMinMileage] = useState<number | undefined>();
  const [maxMileage, setMaxMileage] = useState<number | undefined>();

  useEffect(() => {
    const fetchCars = async () => {
      const newCars = await getCar({
        page,
        limit: 12,
        brand,
        rentalPrice,
        minMileage,
        maxMileage,
      });

      if (page === 1) {
        setCars(newCars);
      } else {
        setCars((prev) => [...prev, ...newCars]);
      }
    };

    fetchCars();
  }, [page, brand, rentalPrice, minMileage, maxMileage]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section>
      <CatalogFilter cars={cars} />
      <CarList cars={cars} />
      <button className={css.load_more} onClick={loadMore}>
        Load More
      </button>
    </section>
  );
};

export default Catalog;
