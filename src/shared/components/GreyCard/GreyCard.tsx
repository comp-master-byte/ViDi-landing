import React, { memo } from "react";
import styles from './GreyCard.module.css';
import Image from "next/image";
import { CardTitle, Subtitle } from "@/shared/ui";
import classNames from "classnames";

type GreyCardProps = {
  title: string;
  subtitle: string;
  startIcon?: string;
  renderEndSlot?: () => React.ReactNode;
  className?: string;
}

export const GreyCard = memo(function GreyCard({
  title,
  subtitle,
  startIcon,
  className,
  renderEndSlot,
}: GreyCardProps) {
  return (
    <div className={classNames(styles.greyCardWrapper, className)}>
      <div className={styles.greyCardTitleWrapper}>
        {startIcon && (
          <div className={styles.greyCardTitleIconWrapper}>
            <Image src={startIcon} alt="" />
          </div>
        )}
        <CardTitle>
          {title}
        </CardTitle>
      </div>

      <Subtitle className={styles.greyCardSubtitle}>
        {subtitle}
      </Subtitle>

      {renderEndSlot && renderEndSlot()}
    </div>
  )
})