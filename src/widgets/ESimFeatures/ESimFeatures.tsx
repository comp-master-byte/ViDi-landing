'use client';
import { memo, useCallback, useMemo } from "react";
import styles from './ESimFeatures.module.css';
import { CreateCardWidget, GreyCard, Heading, ResponsiveContainer, SectionLayout } from "@/shared/components";
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

type ESimFeatureListItem = {
  id: string;
  title: string;
  startIcon: string;
  renderEndSlot: () => React.ReactNode;
}

type ESimFeaturesMobileSwiperProps = {
  eSimFeaturesList: ESimFeatureListItem[]
}

function ESimFeaturesMobileSwiper({
  eSimFeaturesList
}: ESimFeaturesMobileSwiperProps) {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={2.5}
        spaceBetween={8}
        pagination={{
          clickable: true
        }}
        className={styles.eSimFeaturesSwiper}
        breakpoints={{
          410: {
            slidesPerView: 2.5,
            spaceBetween: 9
          },
          350: {
            slidesPerView: 2.2,
            spaceBetween: 9
          },
          310: {
            slidesPerView: 2.2,
            spaceBetween: 9
          }
        }}
      >
        {eSimFeaturesList.map((eSimfFeatureItem) => (
          <SwiperSlide>
            <GreyCard 
              key={eSimfFeatureItem.id} 
              {...eSimfFeatureItem} 
              startIconBg="linear-gradient(#4482FF, #294E99)"
              className={styles.eSimFeaturesTopCard}
              titleClassName={styles?.titleClassName}
              headingClassName={styles.eSimFeaturesCardHeading}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

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

  const eSimFeaturesCardsList = useMemo(() => {
    return [
      {id: '1', title: 'Покрытие\n без границ', startIcon: internet, renderEndSlot: renderCountriesListIcon},
      {id: '2', title: 'Доступные цены на Гб', startIcon: wifi, renderEndSlot: renderTariffsIcon},
      {id: '3', title: 'Покрытие\n без границ', startIcon: eSim, renderEndSlot: renderTrafficIcon},
    ]
  }, [renderCountriesListIcon, renderTariffsIcon, renderTrafficIcon])

  return (
    <SectionLayout id="eSim-features">
      <Heading 
        title="Свобода связи с eSim"
        subtitle="Ваш ключ к международному интернету"
      />
      <ResponsiveContainer>
        <div className={styles.eSimFeaturesTopListCards}>
          {eSimFeaturesCardsList.map((eSimfFeatureItem) => (
            <GreyCard 
              key={eSimfFeatureItem.id} 
              {...eSimfFeatureItem} 
              startIconBg="linear-gradient(#4482FF, #294E99)"
              className={styles.eSimFeaturesTopCard}
              headingClassName={styles.eSimFeaturesCardHeading}
            />
          ))}
        </div>
      </ResponsiveContainer>

      {/* Мобильная версия */}
      <ESimFeaturesMobileSwiper eSimFeaturesList={eSimFeaturesCardsList} />

      <ResponsiveContainer>
        <div className={styles.eSimFeaturesCards}>
          <GreyCard 
            title="Региональные тарифы для путешествий"
            subtitle={`Интернет в нескольких странах\n с одним тарифным планом`}
            renderEndSlot={renderRegionTariffIcon}
            className={styles.eSimFeaturesCard4}
          />
          <GreyCard 
            title={`Простая установка\n eSim`}
            subtitle={`Включите роуминг за минуту\n по прилёту`}
            renderEndSlot={renderSimpleLoadingIcon}
            className={styles.eSimFeaturesCard5}
          />
          <GreyCard 
            title={`Поддержка\n 24/7`}
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
      </ResponsiveContainer>
    </SectionLayout>
  )
})