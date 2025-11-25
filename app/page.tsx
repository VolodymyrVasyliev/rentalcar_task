import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/Hero/Hero';
export default async function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
