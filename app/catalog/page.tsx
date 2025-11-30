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

  useEffect(() => {
    const fetchCars = async () => {
      const newCars = await getCar({
        page,
        limit: 12,
        brand,
        rentalPrice,
      });

      if (page === 1) {
        setCars(newCars);
      } else {
        setCars((prev) => [...prev, ...newCars]);
      }
    };

    fetchCars();
  }, [page, brand, rentalPrice]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <section>
      <CatalogFilter
        cars={cars}
        onSearch={({ selectedBrand, rentalPrice }) => {
          setBrand(selectedBrand);
          setRentalPrice(rentalPrice);
          setPage(1);
        }}
      />
      {cars.length === 0 ? (
        <p className={css.noCars}>Машини не знайдено ⛔️</p>
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
