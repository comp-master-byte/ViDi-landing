import Image from 'next/image';
import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonIntent = 'primary' | 'secondary' | 'white';

type ButtonProps = {
  children: React.ReactNode;
  intent?: ButtonIntent;
  startIcon?: string;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export function Button({
  intent = 'primary',
  children,
  startIcon,
  className,
  isActive,
  onClick
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={classNames(styles.button, className, {
        [styles.primary]: intent === 'primary',
        [styles.secondary]: intent === 'secondary',
        [styles.active]: isActive,
        [styles.buttonWithIcon]: startIcon
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