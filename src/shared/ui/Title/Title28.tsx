import styles from './Title.module.css';
import classNames from "classnames";

type Title28Props = {
  children: React.ReactNode;
  className?: string;
}

export function Title28({
  children,
  className
}: Title28Props) {
  return (
    <h3 className={classNames(styles.title28, className)}>{children}</h3>
  )
}