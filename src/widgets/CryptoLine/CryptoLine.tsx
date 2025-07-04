'use client';

import { memo } from 'react';
import styles from './CryptoLine.module.css';
import { CRYPTO_LOGOS } from './consts';
import { IconCard } from '@/shared/components';

export const CryptoLine = memo(function CryptoLine() {
  return (
    <section className={styles.cryptoLineWrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {[...CRYPTO_LOGOS, ...CRYPTO_LOGOS, ...CRYPTO_LOGOS].map((crypto, index) => (
            <IconCard
              key={`${crypto.id}-${index}`}
              icon={crypto.icon}
              bgColor={crypto.bgColor}
              className={styles.marqueeItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
});