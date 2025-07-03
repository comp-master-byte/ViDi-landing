import { memo, useCallback } from "react";
import styles from './ESimFeatures.module.css';
import { CreateCardWidget, GreyCard, Heading, SectionLayout } from "@/shared/components";
import internet from '@/shared/assets/eSim/icons/internet.svg';
import eSim from '@/shared/assets/eSim/icons/eSim.svg';
import wifi from '@/shared/assets/eSim/icons/wifi.svg';
import clock from '@/shared/assets/eSim/icons/clock.svg';
import countriesList from '@/shared/assets/eSim/countriesList.png';
import tariffs from '@/shared/assets/eSim/tariffs.png';
import traffic from '@/shared/assets/eSim/traffic.png';
import regionTariff from '@/shared/assets/eSim/region_tariff.png';
import simpleLoading from '@/shared/assets/eSim/simple_loading.png';
import support from '@/shared/assets/eSim/support.png';
import Image from "next/image";
import classNames from "classnames";

export const ESimFeatures = memo(function eSimFeatures() {
  
  const renderCountriesListIcon = useCallback(() => {
    return (
      <div className={styles.eSimFeaturesImagesWrapper}>
        <Image 
          src={countriesList} 
          alt="countriesList" 
          className={classNames(
            styles.eSimFeaturesImages, styles.eSimFeaturesImagesCountries
          )} 
        />
      </div>
    ) 
  }, [])

  const renderTariffsIcon = useCallback(() => {
    return (
      <div className={styles.eSimFeaturesImagesWrapper}>
        <Image 
          src={tariffs} 
          alt="tariffs" 
          className={classNames(
            styles.eSimFeaturesImages, styles.eSimFeaturesImagesTariff
          )} 
        />
      </div>
    ) 
  }, [])

  const renderTrafficIcon = useCallback(() => {
    return (
      <div className={styles.eSimFeaturesImagesWrapper}>
        <Image 
          src={traffic} 
          alt="traffic" 
          className={classNames(
            styles.eSimFeaturesImages, styles.eSimFeaturesImagesTraficc
          )} 
        />
      </div>
    ) 
  }, [])

  const renderRegionTariffIcon = useCallback(() => {
    return <Image src={regionTariff} alt="regionTariff" />
  }, [])

  const renderSimpleLoadingIcon = useCallback(() => {
    return <Image src={simpleLoading} alt="simpleLoading" />
  }, [])

  const renderSupportIcon = useCallback(() => {
    return (
      <div className={styles.eSimFeaturesImagesWrapper}>
        <Image 
          src={support} 
          alt="support" 
          className={classNames(
            styles.eSimFeaturesImages, styles.eSimFeaturesImagesSupport)} 
        />
      </div>
    ) 
  }, [])

  return (
    <SectionLayout>
      <Heading 
        title="Свобода связи с eSim"
        subtitle="Ваш ключ к международному интернету"
      />

      <div className={styles.eSimFeaturesCards}>
        <GreyCard 
          title={`Покрытие\n без границ`}
          startIcon={internet}
          startIconBg="linear-gradient(#4482FF, #294E99)"
          renderEndSlot={renderCountriesListIcon}
          className={styles.eSimFeaturesCard1}
          headingClassName={styles.eSimFeaturesCardHeading}
        />
        <GreyCard 
          title="Доступные цены на Гб"
          startIcon={wifi}
          startIconBg="linear-gradient(#4482FF, #294E99)"
          renderEndSlot={renderTariffsIcon}
          className={styles.eSimFeaturesCard2}
          headingClassName={styles.eSimFeaturesCardHeading}
        />
        <GreyCard 
          title={`Следите\n за трафиком`}
          startIcon={eSim}
          startIconBg="linear-gradient(#4482FF, #294E99)"
          renderEndSlot={renderTrafficIcon}
          className={styles.eSimFeaturesCard3}
          headingClassName={styles.eSimFeaturesCardHeading}
        />
        <GreyCard 
          title="Региональные тарифы для путешествий"
          subtitle={`Интернет в нескольких странах\n с одним тарифным планом`}
          renderEndSlot={renderRegionTariffIcon}
          className={styles.eSimFeaturesCard4}
        />
        <GreyCard 
          title="Простая установка eSim"
          subtitle={`Включите роуминг за минуту\n по прилёту`}
          renderEndSlot={renderSimpleLoadingIcon}
          className={styles.eSimFeaturesCard5}
        />
        <GreyCard 
          title={`Поддержка\n 24/71`}
          startIcon={clock}
          startIconBg="linear-gradient(#4482FF, #294E99)"
          renderEndSlot={renderSupportIcon}
          className={styles.eSimFeaturesCard6}
          headingClassName={styles.eSimFeaturesCardHeading}
        />
        <CreateCardWidget 
          title="Оформите eSim и будьте на связи"
          buttonTitle="Оформить eSim"
          className={styles.eSimFeaturesCard7} 
        />
      </div>
    </SectionLayout>
  )
})