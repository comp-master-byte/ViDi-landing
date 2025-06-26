import styles from './PrimaryTitle.module.css';

type PrimaryTitleProps = {
  children: React.ReactNode;
}

export function PrimaryTitle({
  children  
}: PrimaryTitleProps) {
  return (
    <h1 className={styles.primaryTitle}>
      {children}
    </h1>
  )
}