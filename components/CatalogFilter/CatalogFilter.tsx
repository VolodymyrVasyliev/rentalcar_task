import { Car } from '@/types/car';
import css from './CatalogFilter.module.css';

type Props = {
  cars: Car[];
};

const CatalogFilter = ({ cars }: Props) => {
  return (
    <div className={css.filterGroup}>
      {/* Category: Brand */}
      <div className={css.selectWrapper}>
        <label className={css.label} form="brand">
          Car brand
        </label>
        <select className={css.select} defaultValue="Choose a brand">
          <option disabled>Choose a brand</option>

          {cars.map((cars) => (
            <option key={cars.id}>{cars.brand}</option>
          ))}
        </select>
      </div>

      {/* Category: Price */}
      <div className={css.selectWrapper}>
        <label className={css.label}>Price / 1 hour</label>
        <select className={css.select} defaultValue="Choose a price">
          <option disabled>Choose a price</option>

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
        <button className={css.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default CatalogFilter;
