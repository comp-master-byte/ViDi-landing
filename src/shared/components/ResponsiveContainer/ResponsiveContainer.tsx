import styles from './ResponsiveContainer.module.css';

type ResponsiveContainerProps = {
  children: React.ReactNode;
}

export function ResponsiveContainer({
  children
}: ResponsiveContainerProps) {
  return (
    <div className={styles.responsive}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}