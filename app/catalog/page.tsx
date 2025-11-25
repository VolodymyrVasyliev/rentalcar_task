import { getCar } from '@/lib/api/services';
import css from '@/app/catalog/catalog.module.css';

const Catalog = async () => {
  const cars = await getCar({});
  console.log('cars: ', cars);

  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <p>{car.brand}</p>
            <p>{car.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
