import { Subtitle, Title } from '@/shared/ui';
import styles from './Heading.module.css';
import classNames from 'classnames';

type HeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Heading({
  title,
  subtitle,
  className
}: HeadingProps) {
  return (
    <div className={classNames(styles.headingWrapper, className)}>
      <div className={styles.heading}>
        <Title>{title}</Title>
        {subtitle && <Subtitle className={styles.headingSubtitle}>{subtitle}</Subtitle>}
      </div>
    </div>
  )
}