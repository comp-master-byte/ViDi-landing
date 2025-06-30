import styles from './app.module.css';
import { CryptoLine, Header, TravelComfort, Web3Technologies } from "@/widgets";

export default function Home() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <TravelComfort />
        <Web3Technologies />
      </div>
      <CryptoLine />
    </div>
  );
}
