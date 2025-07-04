import { memo } from 'react';
import Image from 'next/image';
import styles from './IconCard.module.css';
import classNames from 'classnames';

type IconCardProps = {
  icon: string;
  alt?: string;
  bgColor: string;
  className?: string;
}

export const IconCard = memo(function IconCard({
 icon,
 alt,
 bgColor,
 className
}: IconCardProps) {
  return (
    <div 
      style={{
        backgroundColor: bgColor
      }} 
      className={classNames(styles.iconCardWrapper, className)}
    >
      <Image src={icon} alt={alt||''} />
    </div>
  )
})