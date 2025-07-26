import Image from 'next/image';
import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonIntent = 'primary' | 'secondary' | 'dark-secondary' | 'white';

type ButtonProps = {
  children: React.ReactNode;
  intent?: ButtonIntent;
  startIcon?: string;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  renderIcon?: () => React.ReactNode;
}

export function Button({
  intent = 'primary',
  children,
  startIcon,
  className,
  isActive,
  renderIcon,
  onClick
}: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={classNames(styles.button, className, {
        [styles.primary]: intent === 'primary',
        [styles.secondary]: intent === 'secondary' || intent === 'dark-secondary',
        [styles.darkSecondary]: intent === 'dark-secondary',
        [styles.active]: isActive,
        [styles.buttonWithIcon]: startIcon
      })}
    >
      {startIcon && (
        <div className={styles.startIconWrapper}>
          <Image loading="eager" src={startIcon} alt='' />
        </div>
      )}
      {renderIcon && 
        <div className={styles.startIconWrapper}>
            <svg 
              className={styles.tgIcon} 
              width="23" 
              height="20" 
              viewBox="0 0 22 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {renderIcon()}
            </svg>
        </div>
      }
      <p>
        {children}
      </p>
    </button>
  )
}