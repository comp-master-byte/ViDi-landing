import styles from './app.module.css';
import { 
  CryptoLine, 
  ESimFeatures, 
  FAQ, 
  FinanceRhythm, 
  Footer, 
  Header, 
  SocialMediaLine, 
  Subscription, 
  TravelBonuses, 
  TravelComfort, 
  Web3Technologies 
} from "@/widgets";

export default function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.responsive}>
        <div className={styles.container}>
          <Header />
          <TravelComfort />
          <Web3Technologies />
        </div>
      </div>
      <CryptoLine />
      <div className={styles.responsive}>
        <div className={styles.container}>
          <ESimFeatures />
          <FinanceRhythm />
          <TravelBonuses />
          <Subscription />
        </div>
      </div>

      <SocialMediaLine />

      <div className={styles.responsive}>
        <div className={styles.container}>
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
}
