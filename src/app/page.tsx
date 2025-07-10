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

export const metadata = {
  title: 'ViDiPay открывает горизонты!',
  description: `Global eSim в 150+ странах\n Virtual Card с выгодным курсом\n USDT платежи по QR SBP`,
  openGraph: {
    title: 'ViDiPay открывает горизонты!',
    description: `Global eSim в 150+ странах\n Virtual Card с выгодным курсом\n USDT платежи по QR SBP`,
    url: 'ViDiPay открывает горизонты!',
    siteName: 'ViDi',
    images: [
      {
        url: 'https://vidi.vercel.app/url_preview.png',
        width: 1200,  
        height: 630,
        alt: 'ViDiPay Card',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      
      <ResponsiveContainer>
        <TravelComfort />
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
