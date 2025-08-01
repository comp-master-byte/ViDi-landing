import { memo } from "react";
import styles from './TravelComfort.module.css';
import Image from "next/image";
import { PrimaryTitle, Subtitle } from "@/shared/ui";
import { PAYMENT_WAYS } from "./consts";
import { IconCard, ResponsiveContainer } from "@/shared/components";
import webApplication from "@/shared/assets/primary_page/web_application.png";
import smallWebApplication from "@/shared/assets/primary_page/small_web_application.png";
import smallWebApplicationWebp from "@/shared/assets/primary_page/small_web_application_webp.webp";
import webApplicationWebp from '@/shared/assets/primary_page/primary_webp.webp';

export const TravelComfort = memo(function TravelComfort() {
  return (
    <div className={styles.travelComfortOverflowWrapper}>
      <ResponsiveContainer>
        <section id="travel-comfort" className={styles.travelComfortWrapper}>
          <div className={styles.travelComfortLeftColumn}>
            <PrimaryTitle>Путешествуйте <br /> с комфортом</PrimaryTitle>
            <Subtitle>
              Ваш финансовый компас для надежной связи и удобных <br /> валютных платежей <br className={styles.mobileSubtitleBr} /> по карте в любой стране.
            </Subtitle>
            <div className={styles.paymentWaysList}>
              {PAYMENT_WAYS.map((paymentWay) => (
                <IconCard 
                  key={paymentWay.id} 
                  icon={paymentWay.icon} 
                  bgColor='#EEF4FF'
                />
              ))}
            </div>
          </div> 
          <Image 
            priority
            className={styles.webApplication} 
            src={webApplicationWebp} 
            alt="" 
            loading="eager"
          />
          <Image 
            priority
            className={styles.smallWebApplication} 
            src={smallWebApplicationWebp} 
            alt="" 
            loading="eager"
            quality={10}
          />
        </section>
      </ResponsiveContainer>
    </div>
  )
})