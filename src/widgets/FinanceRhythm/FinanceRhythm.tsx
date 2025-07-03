import { memo, useCallback } from "react";
import styles from './FinanceRhythm.module.css';
import Image from "next/image";
import { GreyCard, Heading } from "@/shared/components";
import tetherWhite from './assets/tether_white.svg';
import tether from '@/shared/assets/icons/crypto_logos/tether.svg'
import dollar from './assets/dollar.svg';
import web3TopUp from '@/shared/assets/finance_rhythm/web3_top_up.png';
import shareWithFriends from '@/shared/assets/finance_rhythm/share_with_friends.png';
import scanQrCode from '@/shared/assets/finance_rhythm/scan_qr_code.png'; 

export const FinanceRhythm = memo(function FinanceRhythm() {

  const renderWeb3TopUpImage = useCallback(() => {
    return <Image src={web3TopUp} alt="" />
  }, [])

  const renderShareWithFriendsImage = useCallback(() => {
    return <Image src={shareWithFriends} alt="" />
  }, [])

  const renderScanQrCodeImage = useCallback(() => {
    return <Image src={scanQrCode} alt="" />
  }, [])

  return (
    <section className={styles.financeRhythmWrapper}>
      <Heading 
        title="Финансы в ритме движений"
        subtitle="Плати, переводи, кошелёк ViDi"
      />

      <div className={styles.financeRhythmCards}>
        <GreyCard 
          startIconBg="#00A478"
          title="Пополняй баланс"
          subtitle="Удобное пополнение с Web3-технологиями"
          startIcon={tetherWhite}
          renderEndSlot={renderWeb3TopUpImage}
        />

        <GreyCard 
          startIconBg="linear-gradient(#4482FF, #294E99)"
          title="Осуществляй переводы"
          subtitle="Переводи друзьям и близким без комиссий мгновенно"
          startIcon={dollar}
          renderEndSlot={renderShareWithFriendsImage}
        />

        <GreyCard 
          startIconBg="rgba(0, 164, 120, 0.2)"
          title={`Плати\n по QR СБП`}
          subtitle="Сканируй QR-код на кассе, подтверди сумму — готово!"
          startIcon={tether}
          renderEndSlot={renderScanQrCodeImage}
          titleClassName={styles.payQrCodeCardTitle}
        />
      </div>
    </section>
  )
})