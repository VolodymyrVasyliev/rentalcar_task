import { getCar } from '@/lib/api/services';
import { Car } from '@/types/car';
import Link from 'next/link';
import css from './CarCard.module.css';
import LikeButton from '../Ui/LikeButton/LikeButton';
import { useFavoritesStore } from '@/lib/store/favoritesStore';

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  const addressParts = car.address.split(',').map((part) => part.trim());
  const city = addressParts[addressParts.length - 2] || '';
  const country = addressParts[addressParts.length - 1] || '';
  const formattedAddress = `${city} | ${country} | ${car.rentalCompany} |`;
  const shortmile = car.mileage.toString();
  const formattedmile = shortmile[0] + ' ' + shortmile.slice(1);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const liked = useFavoritesStore((state) => state.isFavorite(car.id));

  return (
    <li className={css.container}>
      <div className={css.likeWrapper}>
        <LikeButton liked={liked} onToggle={() => toggleFavorite(car.id)} />
      </div>

      <img src={car.img} alt={car.brand} className={css.img} />

      <div className={css.name_year}>
        <p>
          {car.brand} <span>{car.model}</span>, {car.year}
        </p>
        <p className={css.price}>${car.rentalPrice}</p>
      </div>
      <p className={css.address}>{formattedAddress}</p>
      <p className={css.mileage}>
        {car.type} | {formattedmile}
      </p>
      <Link href={`/catalog/${car.id}`}>
        <button className={css.btn}>Read more</button>
      </Link>
    </li>
  );
};

export default CarCard;
