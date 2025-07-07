import { memo } from "react";
import styles from './Footer.module.css';
import Image from "next/image";
import { Button, Text } from "@/shared/ui";
import classNames from "classnames";
import tgWhiteIcon from '@/shared/assets/footer/white_tg_logo.svg';
import mastercardIcon from '@/shared/assets/footer/mastercard.svg';
import visaIcon from '@/shared/assets/footer/visa.svg';
import applePayIcon from '@/shared/assets/footer/apple_pay.svg';
import googlePayIcon from '@/shared/assets/footer/google_pay.svg';
import vidiIcon from '@/shared/assets/footer/vidi.svg';
import vidiLogo from '@/shared/assets/logo.svg';

function FooterLeftButtons() {
  return (
    <div className={styles.footerButtons}>
      <Button 
        intent="secondary" 
        className={styles.footerButton}
      >
        Публичная оферта
      </Button>  
      <Button 
        intent="secondary" 
        className={styles.footerButton}
      >
        Политика AML/CFT
      </Button>  
      <Button 
        intent="secondary" 
        className={styles.footerButton}
      >
        Персональные данные
      </Button>  
      <Button 
        intent="secondary" 
        className={styles.footerButton}
      >
        Конфиденциальность
      </Button>  
    </div> 
  )
}

function FooterMidContentCompany() {
  return (
    <div className={classNames(styles.footerMidContentSection, styles.footerMidCompany)}>
      <Text isLight className={styles.footerMidText}>
        Company: ViDiPay <br />
        Mersis No: 0925121623800001 <br />
        Tic. Sic. No: 493345-5
      </Text>
    </div>
  )
}

function FooterMidContentDescription() {
  return (
    <div className={classNames(styles.footerMidContentSection, styles.footerMidDescription)}>
      <Text isLight className={styles.footerMidText}>
        Открываем мир без границ с глобальной связью, блокчейн-решениями и виртуальными картами для полной финансовой независимости в любой точке планеты.
      </Text>
    </div>
  )
}

function FooterRightButtons() {
  return (
    <div className={styles.footerButtons}>
      <Button 
        intent="secondary" 
        startIcon={tgWhiteIcon} 
        className={styles.footerButton}
      >
        Mini App
      </Button>  
      <Button 
        intent="secondary" 
        startIcon={tgWhiteIcon} 
        className={styles.footerButton}
      >
        Support
      </Button>  
      <Button 
        intent="secondary" 
        startIcon={tgWhiteIcon} 
        className={styles.footerButton}
      >
        News
      </Button>  
      <Button 
        intent="secondary" 
        startIcon={vidiIcon} 
        className={styles.footerButton}
      >
        Проект
      </Button>  
    </div> 
  )
}

export const Footer = memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopContent}>
        <FooterLeftButtons />
        <div className={styles.footerTopContentMid}>
          <FooterMidContentCompany />
          <FooterMidContentDescription />
        </div> 
        <FooterRightButtons />
      </div>

      {/* Мобильная версия */}
      <div className={styles.footerMobileTopContent}>
        <FooterMidContentCompany />
        <div className={styles.footerMobileButtons}>
          <FooterLeftButtons />
          <FooterRightButtons />
        </div>
        <FooterMidContentDescription />
      </div>

      <div className={styles.footerBottomContent}>
        <div className={styles.footerBottomLeft}>
          <Image src={vidiLogo} alt="" className={styles.footerLogo} />
          <Text isLight>
            ⓒ Все права защищены
          </Text>
        </div>
        <div className={styles.footerBottomRight}>
          <Image src={mastercardIcon} alt="mastercard" className={styles.paymentCard} />
          <Image src={visaIcon} alt="visa" className={styles.paymentCard} />
          <Image src={applePayIcon} alt="applePay" className={styles.paymentCard} />
          <Image src={googlePayIcon} alt="googlePay" className={styles.paymentCard} />
        </div>
      </div>
    </footer>
  )
})