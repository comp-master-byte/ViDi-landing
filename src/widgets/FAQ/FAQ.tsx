'use client';
import { memo, useCallback, useMemo, useState } from "react";
import styles from './FAQ.module.css';
import { Accordion, Heading, SectionLayout } from "@/shared/components";
import { Button } from "@/shared/ui";
import { ACCORDION_HASH_MAP } from "./constants";

type SelectedQuestion = 'wallet' | 'virtual-card' | 'eSim' | 'qr-payments';
export type AccordionContent = {
  id: string;
  title: string;
  text: string;
}
export type AccordionHashMap = Record<SelectedQuestion, AccordionContent[]>;

export const FAQ = memo(function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState<SelectedQuestion>('wallet');

  const handleSelectedQuestion = useCallback(
    (question: SelectedQuestion) => () => setSelectedQuestion(question), 
    []
  )

  const accordionHashMap = useMemo(() => {
    return ACCORDION_HASH_MAP[selectedQuestion];
  }, [selectedQuestion])

  return (
    <SectionLayout>
      <Heading 
        title="Часто задаваемые вопросы"
        className={styles.FAQHeadingWrapper}
      />
      <div className={styles.FAQContent}>
        <div className={styles.FAQContentButtons}>
          <Button 
            intent="secondary" 
            isActive={selectedQuestion === 'wallet'} 
            onClick={handleSelectedQuestion('wallet')}
          >
            Кошелёк
          </Button>
          <Button 
            intent="secondary" 
            isActive={selectedQuestion === 'virtual-card'}
            onClick={handleSelectedQuestion('virtual-card')}
          >
            Виртуальная карта
          </Button>
          <Button 
            intent="secondary" 
            isActive={selectedQuestion === 'eSim'}
            onClick={handleSelectedQuestion('eSim')}
          >
            eSim Global
          </Button>
          <Button 
            intent="secondary" 
            isActive={selectedQuestion === 'qr-payments'}
            onClick={handleSelectedQuestion('qr-payments')}
          >
            QR платежи
          </Button>
        </div>

        <div className={styles.FAQContentAccordionList}>
          {accordionHashMap.map((accordion) => (
            <Accordion 
              key={accordion.id}
              title={accordion.title}
              text={accordion.text}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  )
})