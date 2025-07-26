import Image from 'next/image';
import styles from './PaymentButton.module.css';
import classNames from 'classnames';

type PaymentButtonProps = {
  icon: string;
  isAccent?: boolean;
}

export function PaymentButton({
  icon,
  isAccent
}: PaymentButtonProps) {
  return (
    <button className={classNames(styles.paymentButton, {
      [styles.accentPaymentButton]: isAccent
    })}>
      <Image loading="eager" className={styles.paymentButtonIcon} src={icon} alt='payment-button' />
    </button>
  )
}