'use client';
import { memo } from "react";
import styles from './Header.module.css';
import Image from "next/image";
import ViDiLogo from '@/shared/assets/logo.svg';
import { Button } from "@/shared/ui";
import { ResponsiveContainer } from "@/shared/components";
import { MINI_APP_TG_LINK } from "@/shared/utils";
import { TgButtonIcon } from "./icons";

type ScrollSectionId = 'travel-comfort' | 'web3-map' | 'eSim-features' | 'cashback' | 'subscription';

export const Header = memo(function Header() {

  function handleScrollIntoView(id: ScrollSectionId) {
    const node = document.getElementById(id);
    
    if(id === 'travel-comfort') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return;
    }

    if(node) {
      node.scrollIntoView({behavior: 'smooth'});
    }
  }

  function renderTgIcon() {
    return <TgButtonIcon />
  }

  return (
    <header className={styles.header}>
      <ResponsiveContainer>
        <div className={styles.headerContent}>
          <div className={styles.headerLogo} onClick={() => handleScrollIntoView('travel-comfort')}>
            <Image loading="eager" src={ViDiLogo} alt="ViDi" />
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
          <a href={MINI_APP_TG_LINK} target="_blank">
            <Button renderIcon={renderTgIcon}>
              Mini App
            </Button>
          </a>
        </div>
      </ResponsiveContainer>
    </header>
  )
})