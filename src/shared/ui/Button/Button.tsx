import Image from 'next/image';
import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonIntent = 'primary' | 'secondary' | 'white';

type ButtonProps = {
  children: React.ReactNode;
  intent?: ButtonIntent;
  startIcon?: string;
  className?: string;
}

export function Button({
  intent = 'primary',
  children,
  startIcon,
  className
}: ButtonProps) {
  return (
    <button 
      className={classNames(styles.button, className, {
        [styles.primary]: intent === 'primary',
        [styles.secondary]: intent === 'secondary',
      })}
    >
      {startIcon && (
        <div className={styles.startIconWrapper}>
          <Image src={startIcon} alt='' />
        </div>
      )}
      <p>
        {children}
      </p>
    </button>
  )
}