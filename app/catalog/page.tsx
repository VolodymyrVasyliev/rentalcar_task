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
  // filter condition
  const [brand, setBrand] = useState<string | undefined>();
  const [rentalPrice, setRentalPrice] = useState<string | undefined>();
  const [minMileage, setMinMileage] = useState<string | undefined>();
  const [maxMileage, setMaxMileage] = useState<string | undefined>();

  useEffect(() => {
    const fetchCars = async () => {
      const newCars = await getCar({
        page,
        limit: 12,
        brand: !brand || brand === '' ? undefined : brand,
        rentalPrice:
          !rentalPrice || rentalPrice === '' ? undefined : rentalPrice,
        minMileage: minMileage !== undefined ? String(minMileage) : undefined,
        maxMileage: maxMileage !== undefined ? String(maxMileage) : undefined,
      });

      if (page === 1) {
        setCars(newCars);
      } else {
        setCars((prev) => [...prev, ...newCars]);
      }
    };

    fetchCars();
  }, [page, brand, rentalPrice, minMileage, maxMileage]);

  const handleSearch = async (filters: {
    selectedBrand: string;
    rentalPrice: string;
    minMileage: string;
    maxMileage: string;
  }) => {
    setBrand(filters.selectedBrand);
    setRentalPrice(filters.rentalPrice);
    setMinMileage(filters.minMileage);
    setMaxMileage(filters.maxMileage);

    setPage(1);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section>
      <CatalogFilter cars={cars} onSearch={handleSearch} />
      {cars.length === 0 ? (
        <p className={css.noCars}>Cars no found ⛔️</p>
      ) : (
        <>
          <CarList cars={cars} />
          <button className={css.load_more} onClick={loadMore}>
            Load More
          </button>
        </>
      )}
    </section>
  );
};

export default Catalog;
