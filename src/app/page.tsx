import { ResponsiveContainer } from '@/shared/components';
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
      
      <ResponsiveContainer>
        <TravelComfort />
        <Web3Technologies />
      </ResponsiveContainer>
      
      <CryptoLine />

      <ResponsiveContainer>
        <ESimFeatures />
      </ResponsiveContainer>

      <div className={styles.container}>
        <FinanceRhythm />
      </div>

      <ResponsiveContainer>
        <TravelBonuses />
        <Subscription />
      </ResponsiveContainer>

      <SocialMediaLine />

      <ResponsiveContainer>
        <FAQ />
        <Footer />
      </ResponsiveContainer>
    </div>
  );
}
