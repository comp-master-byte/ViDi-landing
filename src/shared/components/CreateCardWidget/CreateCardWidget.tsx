import { memo } from "react";
import styles from './CreateCardWidget.module.css';
import { Button, Title28 } from "@/shared/ui";
import ViDi from './assets/ViDi.svg';
import Image from "next/image";
import classNames from "classnames";
import { MINI_APP_TG_LINK } from "@/shared/utils";

type CreateCardWidgetProps = {
  className?: string;
  title: string;
  buttonTitle: string;
}

export const CreateCardWidget = memo(function CreateCardWidget({
  title,
  buttonTitle,
  className
}: CreateCardWidgetProps) {
  return (
    <div className={classNames(styles.createCardWidgetWrapper, className)}>
      <Title28 className={styles.createCardWidgetTitle}>
        {title}
      </Title28>
      <a href={MINI_APP_TG_LINK} target="_blank">
        <Button 
          intent="dark-secondary" 
          className={styles.createCardWidgetButton}
        >
          {buttonTitle}
        </Button>
      </a>
      <Image 
        loading='eager'
        src={ViDi} 
        alt="ViDi" 
        className={styles.createCardWidgetLogo} 
      />
    </div>
  )
})