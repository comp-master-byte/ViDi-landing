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
      <Header />
      
      <div className={styles.responsive}>
        <div className={styles.container}>
          <TravelComfort />
          <Web3Technologies />
        </div>
      </div>
      
      <CryptoLine />

      <div className={styles.responsive}>
        <div className={styles.container}>
          {/* <ESimFeatures />
           */}
        </div>
      </div>

      <div className={styles.container}>
        <FinanceRhythm />
      </div>

      <div className={styles.responsive}>
        <div className={styles.container}>
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
