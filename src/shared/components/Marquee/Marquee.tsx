import { memo } from "react";
import styles from './Marquee.module.css';
import FastMarquee from "react-fast-marquee";
import Image from "next/image";

type MarqueeItem = {
  id: number | string;
  icon: string;
  bgColor?: string;
  fullIcon?: boolean;
}
type MarqueeProps = {
  list: MarqueeItem[]
}

export const Marquee = memo(function Marquee({
  list
}: MarqueeProps) {
  return (
    <FastMarquee speed={50}>
      {[...list, ...list].map((item, index) => (
        <Image 
          key={`${item.id}-${index}`} 
          src={item.icon} 
          className={styles.marqueeItem}
          loading="eager"
          alt=""
        />
      ))}
    </FastMarquee>
  )
})