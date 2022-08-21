import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.item}>하위</div>
      </div>
    </div>
  );
};

export default Home;
