import { getCar, getCarById } from '@/lib/api/services';
import FormBook from '@/components/FormBook/FormBook';
import CarDetails from '@/components/CarDetails/CarDetails';
import { Car } from '@/types/car';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DetailsCar({ params }: Props) {
  const { id } = await params;

  const car = await getCarById(id);

  return (
    <div>
      <CarDetails car={car} />
    </div>
  );
}
