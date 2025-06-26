import styles from './Title.module.css';

type TitleProps = {
  children: React.ReactNode;
}

export function Title({
  children
}: TitleProps) {
  return (
    <h2 className={styles.title}>{children}</h2>
  )
}