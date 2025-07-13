import { memo } from "react";
import styles from './Marquee.module.css';
import { IconCard } from "../IconCard";
import FastMarquee from "react-fast-marquee";

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
      {/* <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {[...list, ...list, ...list].map((item, index) => (
            <IconCard
              key={`${item.id}-${index}`}
              icon={item.icon}
              bgColor={item.bgColor}
              fullIcon={item.fullIcon}
              className={styles.marqueeItem}
            />
          ))}
        </div>
      </div>
     */}

      <FastMarquee>
        {list.map((item, index) => (
          <IconCard
            key={`${item.id}-${index}`}
            icon={item.icon}
            bgColor={item.bgColor}
            fullIcon={item.fullIcon}
            className={styles.marqueeItem}
          />
        ))}
      </FastMarquee>
    </>
  )
})