import { memo } from "react";
import styles from './GriptoLine.module.css';
import { CRYPTO_LOGOS } from "./consts";
import { IconCard } from "@/shared/components";

export const CryptoLine = memo(function CryptoLine() {
  return (
    <section className={styles.cryptoLineWrapper}>
      {CRYPTO_LOGOS.map((crypto) => (
        <IconCard 
          key={crypto.id} 
          icon={crypto.icon} 
          bgColor={crypto.bgColor}
        />
      ))}
    </section>
  )
})