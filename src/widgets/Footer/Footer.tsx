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

export const Footer = memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopContent}>
        <div className={styles.footerButtons}>
          <Button intent="secondary">Публичная оферта</Button>  
          <Button intent="secondary">Политика AML/CFT</Button>  
          <Button intent="secondary">Персональные данные</Button>  
          <Button intent="secondary">Конфиденциальность</Button>  
        </div> 
        <div className={styles.footerTopContentMid}>
          <div className={classNames(styles.footerMidContentSection, styles.footerMidCompany)}>
            <Text isLight>
              Company: ViDiPay <br />
              Mersis No: 0925121623800001 <br />
              Tic. Sic. No: 493345-5
            </Text>
          </div>
          <div className={classNames(styles.footerMidContentSection, styles.footerMidDescription)}>
            <Text isLight>
              Открываем мир без границ с глобальной связью, блокчейн-решениями и виртуальными картами для полной финансовой независимости в любой точке планеты.
            </Text>
          </div>
        </div> 
        <div className={styles.footerButtons}>
          <Button intent="secondary" startIcon={tgWhiteIcon}>Mini App</Button>  
          <Button intent="secondary" startIcon={tgWhiteIcon}>Support</Button>  
          <Button intent="secondary" startIcon={tgWhiteIcon}>News</Button>  
          <Button intent="secondary" startIcon={vidiIcon}>Проект</Button>  
        </div> 
      </div>

      <div className={styles.footerBottomContent}>
        <div className={styles.footerBottomLeft}>
          <Image src={vidiLogo} alt="" />
          <Text isLight>
            ⓒ Все права защищены
          </Text>
        </div>
        <div className={styles.footerBottomRight}>
          <Image src={mastercardIcon} alt="mastercard" />
          <Image src={visaIcon} alt="visa" />
          <Image src={applePayIcon} alt="applePay" />
          <Image src={googlePayIcon} alt="googlePay" />
        </div>
      </div>
    </footer>
  )
})