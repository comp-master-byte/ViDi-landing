import { memo, useCallback } from "react";
import styles from './TravelBonuses.module.css';
import { GreyCard, Heading, SectionLayout } from "@/shared/components";
import referalProgram from '@/shared/assets/travel_bonuses/referal_program.png';
import cashback from '@/shared/assets/travel_bonuses/cashback.png';
import Image from "next/image";

export const TravelBonuses = memo(function TravelBonuses() {

  const renderReferalProgramImage = useCallback(() => {
    return <Image className={styles.referIcon} src={referalProgram} alt="" />
  }, [])

  const renderCashbackImage = useCallback(() => {
    return <Image src={cashback} alt="" />
  }, [])

  return (
    <SectionLayout>
      <Heading 
        title="Бонусы за путешествия в цифровое будущее"
        subtitle="Присоединяйтесь к нам! Станьте амбассадором #Travel и вдохновляйте мир своими приключениями!"
      />

      <div className={styles.travelBonusesCardsWrapper}>
        <GreyCard 
          title="Реферальная программа от 21$"
          subtitle="Приглашайте друзей в mini app Telegram, делитесь эмоциями от путешествий в соцсетях и получайте бонусы в USD за их активность."
          renderEndSlot={renderReferalProgramImage}
          subtitleClassName={styles.subtitleClassName}
        />
        <GreyCard 
          title="CashBack Star до 5%"
          subtitle="Оплачивайте покупки за границей нашими картами VISA или MasterCard, подключайте eSIM для интернета и зарабатывайте больше Stars на свой Telegram-аккаунт."
          renderEndSlot={renderCashbackImage}
          subtitleClassName={styles.subtitleClassName}
        />
      </div>
    </SectionLayout>
  )
})