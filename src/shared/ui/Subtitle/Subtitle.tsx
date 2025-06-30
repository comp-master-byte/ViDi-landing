import classNames from 'classnames';
import styles from './Subtitle.module.css';

type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
}

export function Subtitle({
  children,
  className
}: SubtitleProps) {
  return (
    <p className={classNames(styles.subtitle, className)}>{children}</p>
  )
}