'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import css from '@/components/Header/Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={css.container_flax}>
      <div className={css.container}>
        {/* Logo */}
        <Link href="/" className={css.logo}>
          <Image src="/icons/Logo.svg" alt="Logo" width={104} height={16} />
        </Link>

        {/* Desktop Menu */}
        <nav className={css.nav}>
          <Link href="/">Home</Link>
          <Link href="/catalog">Catalog</Link>
        </nav>

        {/* Burger Icon (mobile) */}
        <button
          className={css.burger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`${css.line} ${open ? css.open : ''}`}></span>
          <span className={`${css.line} ${open ? css.open : ''}`}></span>
          <span className={`${css.line} ${open ? css.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={css.mobile_menu}>
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/catalog" onClick={() => setOpen(false)}>
            Catalog
          </Link>
        </div>
      )}
    </header>
  );
}
