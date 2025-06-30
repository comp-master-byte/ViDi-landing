import { memo } from "react";
import styles from './CreateCardWidget.module.css';
import { Button, Title28 } from "@/shared/ui";
import ViDi from './assets/ViDi.svg';
import Image from "next/image";

type CreateCardWidgetProps = {
  className?: string;
}

export const CreateCardWidget = memo(function CreateCardWidget({
  className
}: CreateCardWidgetProps) {
  return (
    <div className={styles.createCardWidgetWrapper}>
      <Title28 className={styles.createCardWidgetTitle}>
        Оформите карту и путешествуйте свободно
      </Title28>
      <Button intent="secondary" className={styles.createCardWidgetButton}>
        Оформить карту
      </Button>

      <Image 
        src={ViDi} 
        alt="ViDi" 
        className={styles.createCardWidgetLogo} 
      />
    </div>
  )
})