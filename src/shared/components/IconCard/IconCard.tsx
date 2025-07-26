import { memo } from 'react';
import Image from 'next/image';
import styles from './IconCard.module.css';
import classNames from 'classnames';

type IconCardProps = {
  icon: string;
  alt?: string;
  bgColor?: string;
  className?: string;
  fullIcon?: boolean;
}

export const IconCard = memo(function IconCard({
 icon,
 alt,
 bgColor,
 className,
 fullIcon
}: IconCardProps) {
  return (
    <div 
      style={{
        backgroundColor: fullIcon ? 'none' : bgColor
      }} 
      className={classNames(styles.iconCardWrapper, className, {
        [styles.fullIconCard]: fullIcon
      })}
    >
      <Image loading="eager" src={icon} alt={alt||''} />
    </div>
  )
})