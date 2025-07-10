'use client';
import { memo, useCallback, useMemo } from "react";
import styles from './FinanceRhythm.module.css';
import Image from "next/image";
import { GreyCard, Heading, SectionLayout } from "@/shared/components";
import tetherWhite from './assets/tether_white.svg';
import tether from '@/shared/assets/icons/crypto_logos/tether.svg'
import dollar from './assets/dollar.svg';
import web3TopUp from '@/shared/assets/finance_rhythm/web3_top_up.png';
import shareWithFriends from '@/shared/assets/finance_rhythm/share_with_friends.png';
import scanQrCode from '@/shared/assets/finance_rhythm/scan_qr_code.png'; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import './FinanceRhythm.css';

type FinanceCard = {
  id: string;
  title: string;
  subtitle: string;
  startIcon: string;
  startIconBg: string;
  renderImg: () => React.ReactNode;
  titleClassName?: string;
}

type FinanceRhythmSliderProps = {
  cardsList: FinanceCard[];
}

function FinanceRhythmSlider({
  cardsList
}: FinanceRhythmSliderProps) {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper 
        modules={[Pagination]}
        spaceBetween={9}
        slidesPerView={2.5}
        className={styles.financeRhythmSliderWrapper}
        pagination={{
          clickable: true,
        }}
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
        {cardsList.map((financeCardItem) => (
          <SwiperSlide
            className={styles.financeRhythmSwiperSlide}
          >
            <GreyCard 
              key={financeCardItem.id}
              title={financeCardItem.title}
              subtitle={financeCardItem.subtitle}
              startIcon={financeCardItem.startIcon}
              startIconBg={financeCardItem.startIconBg}
              renderEndSlot={financeCardItem.renderImg}
              titleClassName={financeCardItem?.titleClassName}
              headingClassName={styles.financeCardSliderHeading}
              subtitleClassName={styles.financeCardSliderSubtitle}
              className={styles.financeCardSlider}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export const FinanceRhythm = memo(function FinanceRhythm() {

  const renderWeb3TopUpImage = useCallback(() => {
    return <Image className={styles.financeCardImg} src={web3TopUp} alt="" />
  }, [])

  const renderShareWithFriendsImage = useCallback(() => {
    return <Image className={styles.financeCardImg} src={shareWithFriends} alt="" />
  }, [])

  const renderScanQrCodeImage = useCallback(() => {
    return <Image className={styles.financeCardImg} src={scanQrCode} alt="" />
  }, [])

  const financeCardsList = useMemo(() => {
    return [
      {id: '1', startIconBg: '#00A478', title: 'Пополняй баланс', subtitle: 'Удобное пополнение с Web3-технологиями', startIcon: tetherWhite, renderImg: renderWeb3TopUpImage},
      {id: '2', startIconBg: 'linear-gradient(#4482FF, #294E99)', title: 'Осуществляй переводы', subtitle: 'Переводи друзьям и близким без комиссий мгновенно', startIcon: dollar, renderImg: renderShareWithFriendsImage},
      {id: '3', startIconBg: 'rgba(0, 164, 120, 0.2)', title: `Плати\n по QR СБП`, subtitle: 'Сканируй QR-код на кассе, подтверди сумму — готово!', startIcon: tether, renderImg: renderScanQrCodeImage, titleClassName: styles.payQrCodeCardTitle},
    ]
  }, [renderWeb3TopUpImage, renderShareWithFriendsImage, renderScanQrCodeImage])

  return (
    <SectionLayout>
      <Heading 
        title="Финансы в ритме движений"
        subtitle="Плати, переводи, кошелёк ViDi"
      />

      <div className={styles.financeRhythmCards}>
        {financeCardsList.map((financeCardItem) => (
          <GreyCard 
            key={financeCardItem.id}
            title={financeCardItem.title}
            subtitle={financeCardItem.subtitle}
            startIcon={financeCardItem.startIcon}
            startIconBg={financeCardItem.startIconBg}
            renderEndSlot={financeCardItem.renderImg}
            titleClassName={financeCardItem?.titleClassName}
          />
        ))}
      </div>

      {/* Мобильная версия - слайдер */}
      <FinanceRhythmSlider cardsList={financeCardsList} />
    </SectionLayout>
  )
})