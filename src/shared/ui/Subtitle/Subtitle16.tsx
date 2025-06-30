import styles from './Subtitle.module.css';
import classNames from "classnames";

type Subtitle16Props = {
  children: React.ReactNode;
  className?: string;
}

export function Subtitle16({
  children,
  className
}: Subtitle16Props) {
  return (
    <p className={classNames(styles.subtitle16, className)}>{children}</p>
  )
}