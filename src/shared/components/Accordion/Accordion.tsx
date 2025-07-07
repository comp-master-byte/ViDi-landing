'use client';
import React, { memo, useRef, useState } from 'react';
import styles from './Accordion.module.css';
import { Text, Title24 } from '@/shared/ui';
import Image from 'next/image';
import openIcon from '@/shared/assets/icons/accordion/plus.svg';
import classNames from 'classnames';

type AccordionProps = {
  title: string;
  text: string;
};

export const Accordion = memo(function Accordion({
  title, 
  text
}: AccordionProps) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setIsAccordionOpen(!isAccordionOpen)
  }

  return (
    <div 
      onClick={toggleAccordion}
      className={classNames(styles.accordionWrapper, {
        [styles.openAccordionWrapper]: isAccordionOpen
      })}
    >
      <button className={styles.accordionHeader}>
        <Title24>{title}</Title24>
        <div className={styles.accordionIconWrapper}>
          <Image className={styles.accordionIcon} src={openIcon} alt='accordion' />
        </div>
      </button>
      <div
        ref={contentRef}
        className={classNames(styles.accordionContent, {
          [styles.accordionMarginBottom]: isAccordionOpen
        })}
        style={{
          maxHeight: isAccordionOpen ? `${contentRef.current?.scrollHeight}px` : '0',
        }}
      >
        <Text isLight>{text}</Text>
      </div>
    </div>
  );
});
