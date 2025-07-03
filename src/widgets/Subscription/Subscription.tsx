import { memo, useCallback } from "react";
import styles from './Subscription.module.css';
import { GreyCard, Heading, SectionLayout } from "@/shared/components";
import subscriptionImage from "@/shared/assets/subscription/subscription.png";
import Image from "next/image";
import { BenifitsList } from "./components";

export const Subscription = memo(function Subscription() {

  const renderSubscriptionImage = useCallback(() => {
    return <Image src={subscriptionImage} alt="" />
  }, [])

  return (
    <SectionLayout>
      <Heading 
        title="Подписка за подписку"
        subtitle="Ваш приоритетный доступ в мир блокчейн-технологий"
      />
      <div className={styles.subscriptionContent}>
        <GreyCard 
          title="Подписка — ваша новая виза в Web3"
          subtitle="Это не просто подписка, а ключ к глобальной экосистеме от безопасных платежей с картами VISA и MasterCard до бесперебойной связи с eSIM в любой точке планеты."
          renderEndSlot={renderSubscriptionImage}
          className={styles.subscriptionImageCard}
        />
        <BenifitsList />
      </div>
    </SectionLayout>
  )
})