import { memo } from "react";
import styles from './TravelComfort.module.css';
import { PrimaryTitle, Subtitle } from "@/shared/ui";
import { PAYMENT_WAYS } from "./consts";
import { IconCard } from "@/shared/components";
import webApplication from "@/shared/assets/primary_page/web_application.png";
import Image from "next/image";

export const TravelComfort = memo(function TravelComfort() {
  return (
    <section className={styles.travelComfortWrapper}>
      <div className={styles.travelComfortLeftColumn}>
        <PrimaryTitle>Путешествуйте <br /> с комфортом</PrimaryTitle>
        <Subtitle>
          Ваш финансовый компас для надежной связи и удобных <br /> валютных платежей по карте в любой стране.
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
      
      <Image className={styles.webApplication} src={webApplication} alt="" />
    </section>
  )
})