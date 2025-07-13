import { memo } from "react";
import styles from './Marquee.module.css';
import { IconCard } from "../IconCard";
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
    <>
      <FastMarquee>
        {list.map((item, index) => (
          <Image 
            key={`${item.id}-${index}`} 
            width={80} 
            height={80} 
            src={item.icon} 
            className={styles.marqueeItem}
            alt=""
          />
          // <IconCard
          //   key={`${item.id}-${index}`}
          //   icon={item.icon}
          //   bgColor={item.bgColor}
          //   fullIcon={item.fullIcon}
          //   className={styles.marqueeItem}
          // />
        ))}
      </FastMarquee>
    </>
  )
})