import Link from 'next/link';
import css from '@/components/Header/Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={css.container_flax}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          <Image src="/icons/Logo.svg" alt="Logo" width={104} height={16} />
        </Link>
        <nav className={css.nav}>
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
        </nav>
      </div>
    </header>
  );
}
