import Image from 'next/image';
import styles from './Select.module.css';
import rightArrow from '@/shared/assets/icons/base/right_arrow.svg';

type SelectProps = {
  icon: string;
  title: string;
}

export function Select({
  icon,
  title
}: SelectProps) {
  return (
    <select className={styles.selectWrapper}>
      <div className={styles.selectStartSlot}>
        <Image loading="eager" className={styles.selectStartSlotIcon} src={icon} alt='' />
        <p className={styles.selectStartSlotTitle}>{title}</p>
      </div>
      <Image loading="eager" src={rightArrow} alt='' />
    </select>
  )
}