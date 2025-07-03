import styles from './Title.module.css';
import classNames from "classnames";

type Title24Props = {
  children: React.ReactNode;
  className?: string;
}

export function Title24({
  children,
  className
}: Title24Props) {
  return (
    <h4 className={classNames(styles.title24, className)}>{children}</h4>
  )
}