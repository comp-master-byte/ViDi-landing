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

import { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    title: 'ViDiPay открывает горизонты!',
    description: `Global eSim в 150+ странах\n Virtual Card с выгодным курсом\n USDT платежи по QR SBP\n Путешествуй с комфортом!`,
    images: [
      {
        url: 'https://vidi-two.vercel.app/og-image.png', 
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      
      <TravelComfort />
      
      <ResponsiveContainer>
        <Web3Technologies />
      </ResponsiveContainer>
      
      <CryptoLine />
      <ESimFeatures />

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
