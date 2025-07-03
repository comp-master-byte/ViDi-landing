import React, { memo } from "react";
import styles from './GreyCard.module.css';
import Image from "next/image";
import { CardTitle, Subtitle, Text } from "@/shared/ui";
import classNames from "classnames";

type GreyCardProps = {
  title: string;
  subtitle?: string;
  startIcon?: string;
  startIconBg?: string;
  renderEndSlot?: () => React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  headingClassName?: string;
}

export const GreyCard = memo(function GreyCard({
  title,
  subtitle,
  startIcon,
  startIconBg,
  className,
  renderEndSlot,
  titleClassName,
  subtitleClassName,
  headingClassName
}: GreyCardProps) {
  return (
    <div className={classNames(styles.greyCardWrapper, className)}>
      <div className={classNames(styles.greyCardTitleWrapper, headingClassName)}>
        {startIcon && (
          <div style={{background: startIconBg}} className={styles.greyCardTitleIconWrapper}>
            <Image src={startIcon} alt="" />
          </div>
        )}
        <CardTitle className={titleClassName}>
          {title}
        </CardTitle>
      </div>

      {subtitle && (
        <Text isLight className={classNames(styles.greyCardSubtitle, subtitleClassName)}>
          {subtitle}
        </Text>
      )}

      {renderEndSlot && renderEndSlot()}
    </div>
  )
})