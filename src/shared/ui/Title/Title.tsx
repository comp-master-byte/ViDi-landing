import classNames from 'classnames';
import styles from './Title.module.css';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
}

export function Title({
  children,
  className
}: TitleProps) {
  return (
    <h2 className={classNames(styles.title, className)}>{children}</h2>
  )
}