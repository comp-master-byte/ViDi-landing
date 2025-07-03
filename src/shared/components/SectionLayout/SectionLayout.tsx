import React from 'react';
import styles from './SectionLayout.module.css';

type SectionLayoutProps = {
  children: React.ReactNode;
}

export function SectionLayout({
  children
}: SectionLayoutProps) {
  return (
    <section className={styles.sectionLayoutWrapper}>
      {children}
    </section>
  )
}