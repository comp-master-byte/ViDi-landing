'use client';
import { memo } from "react";
import styles from './Header.module.css';
import Image from "next/image";
import ViDiLogo from '@/shared/assets/logo.svg';
import { Button } from "@/shared/ui";
import tgIcon from '@/shared/assets/tg_mini_app.svg';
import { ResponsiveContainer } from "@/shared/components";

export const Header = memo(function Header() {

  function handleScrollIntoView(id: string) {
    const el = document.getElementById(id);
    if(el) {
      el.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <header className={styles.header}>
      <ResponsiveContainer>
        <div className={styles.headerContent}>
          <div className={styles.headerLogo} onClick={() => handleScrollIntoView('travel-comfort')}>
            <Image src={ViDiLogo} alt="ViDi" />
          </div>
          <ul className={styles.headerLinksList}>
            <li 
              className={styles.headerLinkItem}
              onClick={() => handleScrollIntoView('travel-comfort')}
            >
              Кошелек
            </li>
            <li 
              className={styles.headerLinkItem}
              onClick={() => handleScrollIntoView('web3-map')}
            >
              Виртуальная карта
            </li>
            <li 
              className={styles.headerLinkItem}
              onClick={() => handleScrollIntoView('eSim-features')}
            >
              eSim
            </li>
            <li 
              className={styles.headerLinkItem}
              onClick={() => handleScrollIntoView('cashback')}
            >
              Cashback
            </li>
            <li 
              className={styles.headerLinkItem}
              onClick={() => handleScrollIntoView('subscription')}
            >
              Подписка
            </li>
          </ul>
          <Button startIcon={tgIcon} >
            Mini App
          </Button>
        </div>
      </ResponsiveContainer>
    </header>
  )
})