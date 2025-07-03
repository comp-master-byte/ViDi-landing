import React from 'react';
import styles from './Text.module.css';
import classNames from 'classnames';

type TextProps = {
  children: React.ReactNode;
  className?: string;
  isLight?: boolean;
}

export function Text({
  children,
  isLight,
  className,
}: TextProps) {
  return (
    <p className={classNames(styles.text, className, {
      [styles.light]: isLight
    })}>
      {children}
    </p>
  )
}