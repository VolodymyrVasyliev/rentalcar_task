import { Car } from '@/types/car';
import FormBook from '../FormBook/FormBook';
import css from './CarDetails.module.css';
import Location from '@/icons/Location.svg';

type Props = {
  car: Car;
};
const CarDetails = ({ car }: Props) => {
  const shortId = car.id.slice(0, 4);
  const partsAddress = car.address.split(',').map((part) => part.trim());
  const shortAddress = partsAddress.slice(-2).join(', ');
  const shortmile = car.mileage.toString();
  const formattedmile = shortmile[0] + ' ' + shortmile.slice(1) + ' km';
  const additionally = [...car.accessories, ...car.functionalities];

  return (
    <div className={css.container}>
      <div className={css.wrapperLeft}>
        <img
          className={css.img}
          src={car.img}
          alt={car.brand}
          width={640}
          height={512}
        />
        <FormBook />
      </div>

      <div className={css.wrapperRight}>
        <p className={css.nameInfo}>
          {car.brand} {car.model}, {car.year}
          <span>id: {shortId}</span>
        </p>

        <p className={css.locationInfo}>
          <img
            src="/icons/Location.svg"
            alt="location"
            width={16}
            height={16}
          />
          {shortAddress}
          <span>
            Mileage:
            {formattedmile}
          </span>
        </p>

        <p className={css.price}>${car.rentalPrice}</p>

        <p className={css.description}>{car.description}</p>

        <ul className={css.conditions}>
          Rental Conditions:
          {car.rentalConditions.map((condition, index) => (
            <li key={index} className={css.item}>
              <span className={css.icon}>
                <img
                  src="/icons/check-circle.svg"
                  alt="location"
                  width={16}
                  height={16}
                />
              </span>
              {condition}
            </li>
          ))}
        </ul>

        <ul className={css.conditions}>
          Car Specifications:
          <li className={css.item}>
            <span className={css.icon}>
              <img
                src="/icons/calendar.svg"
                alt="Year"
                width={16}
                height={16}
              />
            </span>
            Year: {car.year}
          </li>
          <li className={css.item}>
            <span className={css.icon}>
              <img src="/icons/car.svg" alt="Type" width={16} height={16} />
            </span>
            Type: {car.type}
          </li>
          <li className={css.item}>
            <span className={css.icon}>
              <img
                src="/icons/fuel-pump.svg"
                alt="fuel-pump"
                width={16}
                height={16}
              />
            </span>
            Fuel Consumption: {car.fuelConsumption}
          </li>
          <li className={css.item}>
            <span className={css.icon}>
              <img
                src="/icons/gear.svg"
                alt="Engine Size"
                width={16}
                height={16}
              />
            </span>
            Engine Size: {car.engineSize}
          </li>
        </ul>

        <ul className={css.conditions}>
          Car Specifications:
          {additionally.map((condition, index) => (
            <li key={index} className={css.item}>
              <span className={css.icon}>
                <img
                  src="/icons/check-circle.svg"
                  alt="location"
                  width={16}
                  height={16}
                />
              </span>
              {condition}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
