'use client';
import styles from './Loader.module.css';
import Image from 'next/image';
import VidiIcon from '@/shared/assets/icons/base/V.svg';

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.iconContainer}>
        <div className={styles.backgroundCircle}/>
        <svg className={styles.progressRing} viewBox="0 0 126 126">
            <circle
              className={styles.progressCircle}
              cx="63"
              cy="63"
              r="60"
            />
        </svg>
        <Image className={styles.vIcon} src={VidiIcon} alt='' />
      </div>
    </div>
  )
}