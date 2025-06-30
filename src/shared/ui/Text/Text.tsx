import React from 'react';
import styles from './Text.module.css';
import classNames from 'classnames';

type TextProps = {
  children: React.ReactNode;
  className?: string;
}

export function Text({
  children,
  className
}: TextProps) {
  return (
    <p className={classNames(styles.text, className)}>
      {children}
    </p>
  )
}