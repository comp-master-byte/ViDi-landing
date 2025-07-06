import { memo } from 'react';
import styles from './CryptoLine.module.css';
import { CRYPTO_LOGOS } from './consts';
import { Marquee } from '@/shared/components';

export const CryptoLine = memo(function CryptoLine() {
  return (
    <section className={styles.cryptoLineWrapper}>
      <Marquee list={CRYPTO_LOGOS} />
    </section>
  );
});