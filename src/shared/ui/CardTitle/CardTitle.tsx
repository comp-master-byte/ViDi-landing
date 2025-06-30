import React from 'react';
import styles from './CardTitle.module.css';
import classNames from 'classnames';

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({
  children,
  className
}: CardTitleProps) {
  return (
    <h3 className={classNames(styles.cardTitle, className)}>
      {children}
    </h3>
  )
}