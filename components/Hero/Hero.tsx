import css from '@/components/Hero/Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={css.container}>
      <h2 className={css.title}>Find your perfect rental car</h2>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link href="/catalog">
        <button className={css.btn}>View Catalog</button>
      </Link>
    </section>
  );
}
