import { memo } from 'react';
import Image from 'next/image';
import styles from './IconCard.module.css';

type IconCardProps = {
  icon: string;
  alt?: string;
  bgColor: string;
}

export const IconCard = memo(function IconCard({
 icon,
 alt,
 bgColor
}: IconCardProps) {
  return (
    <div 
      style={{
        backgroundColor: bgColor
      }} 
      className={styles.iconCardWrapper}
    >
      <Image src={icon} alt={alt||''} />
    </div>
  )
})