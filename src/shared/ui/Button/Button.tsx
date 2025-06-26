import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonIntent = 'primary' | 'secondary' | 'white';

type ButtonProps = {
  intent: ButtonIntent;
  children: React.ReactNode;
}

export function Button({
  intent = 'primary',
  children
}: ButtonProps) {
  return (
    <button 
      className={classNames(styles.button, {
        [styles.primary]: intent === 'primary',
        [styles.secondary]: intent === 'secondary',
      })}
    >
      {children}
    </button>
  )
}