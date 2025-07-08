import { memo } from "react";
import styles from './Header.module.css';
import Image from "next/image";
import ViDiLogo from '@/shared/assets/logo.svg';
import { Button } from "@/shared/ui";
import tgIcon from '@/shared/assets/tg_mini_app.svg';

export const Header = memo(function Header() {
  return (
    <header className={styles.header}>
      <div className="responsive">
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.headerLogo}>
              <Image src={ViDiLogo} alt="ViDi" />
            </div>
            <ul className={styles.headerLinksList}>
              <li className={styles.headerLinkItem}>Кошелек</li>
              <li className={styles.headerLinkItem}>Виртуальная карта</li>
              <li className={styles.headerLinkItem}>eSim</li>
              <li className={styles.headerLinkItem}>Cashback</li>
              <li className={styles.headerLinkItem}>Подписка</li>
            </ul>
            <Button startIcon={tgIcon} >
              Mini App
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
})