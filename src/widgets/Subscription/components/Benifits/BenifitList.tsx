import { BenifitListItem } from './BenifitListItem';
import styles from './Benifits.module.css';
import { BENIFITS } from './constants';

export function BenifitsList() {
  return (
    <div className={styles.benifitsListWrapper}>
      {BENIFITS.map((benifit) => (
        <BenifitListItem 
          key={benifit.id} 
          icon={benifit.icon} 
          title={benifit.title} 
        />
      ))}
    </div>
  )
}