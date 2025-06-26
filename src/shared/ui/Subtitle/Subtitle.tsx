import styles from './Subtitle.module.css';

type SubtitleProps = {
  children: React.ReactNode;
}

export function Subtitle({
  children
}: SubtitleProps) {
  return (
    <p className={styles.subtitle}>{children}</p>
  )
}