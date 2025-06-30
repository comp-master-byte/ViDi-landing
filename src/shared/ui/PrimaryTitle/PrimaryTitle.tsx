import classNames from 'classnames';
import styles from './PrimaryTitle.module.css';

type PrimaryTitleProps = {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryTitle({
  children,
  className
}: PrimaryTitleProps) {
  return (
    <h1 className={classNames(styles.primaryTitle, className)}>
      {children}
    </h1>
  )
}