import Image from 'next/image';
import styles from './Benifits.module.css';
import { Title24 } from '@/shared/ui';

type BenifitListItemProps = {
  icon: string;
  title: string;
}

export function BenifitListItem({
  icon,
  title
}: BenifitListItemProps) {
  return (
    <div className={styles.benifitListItemWrapper}>
      <Image loading="eager" className={styles.benifitListItemIcon} src={icon} alt='' />
      <Title24>{title}</Title24>
    </div>
  )
}