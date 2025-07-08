import React from 'react';
import styles from './SectionLayout.module.css';

type SectionLayoutProps = {
  children: React.ReactNode;
  id?: string;
}

export function SectionLayout({
  id,
  children
}: SectionLayoutProps) {
  return (
    <section id={id} className={styles.sectionLayoutWrapper}>
      {children}
    </section>
  )
}