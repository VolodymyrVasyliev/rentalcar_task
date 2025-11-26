import { Car } from '@/types/car';
import CarCard from '../CarCard/CarCard';
import { getCar } from '@/lib/api/services';
import css from './CarList.module.css';

type Props = {
  cars: Car[];
};
const CarList = ({ cars }: Props) => {
  return (
    <ul className={css.container}>
      {cars.map((car) => (
        <CarCard car={car} key={car.id} />
      ))}
    </ul>
  );
};

export default CarList;
