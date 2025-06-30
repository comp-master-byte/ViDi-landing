import Image from 'next/image';
import styles from './PaymentButton.module.css';

type PaymentButtonProps = {
  children: React.ReactNode;
  icon: string;
}

export function PaymentButton({
  children,
  icon
}: PaymentButtonProps) {
  return (
    <button className={styles.paymentButton}>
      <Image className={styles.paymentButtonIcon} src={icon} alt='payment-button' />
      {children}
    </button>
  )
}