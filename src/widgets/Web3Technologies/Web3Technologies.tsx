import { memo, useCallback } from "react";
import styles from './Web3Technologies.module.css';
import { Subtitle, Subtitle16, Title, Title28 } from "@/shared/ui";
import { COUNTRIES } from "./consts";
import Image from "next/image";
import bankCard from '@/shared/assets/virtual_web3_map/my_bank_card.png';
import countriesMap from '@/shared/assets/virtual_web3_map/countries_map.png';
import { CreateCardWidget, GreyCard } from "@/shared/components";
import { PaymentButton } from "./components";
import createCardInApp from '@/shared/assets/virtual_web3_map/create_card_in_app.png';
import topUpCard from '@/shared/assets/virtual_web3_map/top_up_card_with_wallet.png';
import googlePAy from '@/shared/assets/virtual_web3_map/icons/google_pay.svg';
import applePay from '@/shared/assets/virtual_web3_map/icons/apple_pay.svg';

function CardRegistrationProcess() {
  const renderCreateCardInAppIcon = useCallback(() => {
    return <Image className={styles.registrationProcessImage__1} src={createCardInApp} alt="createCardInApp" />
  }, [])

  const renderTopUpCardIcon = useCallback(() => {
    return <Image className={styles.registrationProcessImage__2} src={topUpCard} alt="topUpCard" />
  }, [])

  const renderPaymentButtons = useCallback(() => {
    return (
      <div className={styles.paymentButtonsList}>
        <PaymentButton isAccent icon={googlePAy} />
        <PaymentButton icon={applePay} />
      </div>
    )
  }, [])

  return (
    <div className={styles.cardRegistrationProcessWrapper}>
      <GreyCard  
        title={`Оформите карту\n в приложении`}
        subtitle="VISA или Mastercard за минуту"
        className={styles.registrationProcess__1}
        renderEndSlot={renderCreateCardInAppIcon}
      />
      <GreyCard 
        title={`Пополните карту\n через кошелек`}
        subtitle="Мгновенное зачисление средств"
        className={styles.registrationProcess__2}
        renderEndSlot={renderTopUpCardIcon}
      />
      <GreyCard 
        title={`Привяжите к Apple Pay\n и Google Pay`}
        subtitle={`Оплачивайте отели, рестораны\n за границей`}
        className={styles.registrationProcess__3}
        renderEndSlot={renderPaymentButtons}
      />
      <CreateCardWidget 
        title={`Оформите карту\n и путешествуйте свободно`}
        buttonTitle="Оформить карту"
        className={styles.registrationProcess__4} 
      />
    </div>
  ) 
}

export const Web3Technologies = memo(function Web3Technologies() {
  return (
    <section id="web3-map" className={styles.web3Technologies}>
      <div className={styles.web3TechnologiesName}>
        <Title className={styles.web3TechnologiesTitle}>Виртуальная карта <br /> с Web3-технологиями</Title>
        <Subtitle>Ваш билет в финансовый мир</Subtitle>
      </div>
      <div className={styles.web3PaymentMap}>
        <div className={styles.web3PaymentMapInfo}>
          <Title28 className={styles.web3PaymentMapInfo__title}>Платите за рубежом <br /> в одно касание</Title28>
          <Title>+ 150 стран</Title>
          <Subtitle16 className={styles.web3PaymentMapInfo__subtitle}>Конвертация валют с минимальными комиссиями</Subtitle16>
          <div className={styles.web3PaymentCountriesList}>
            {COUNTRIES.map((country) => (
              <Image 
                alt={country.name}
                key={country.id} 
                src={country.countryIcon} 
                className={styles.web3PaymentCountryListItem}
              />
            ))}
          </div>
        </div>
        <Image 
          src={bankCard} 
          alt="bankCard" 
          className={styles.web3TechnologiesBankCard}
        />
        <Image 
          src={countriesMap} 
          alt="countriesMap" 
          className={styles.web3TechnologiesCountriesMap}
        />
      </div>
      
      <CardRegistrationProcess />
    </section>
  )
})
