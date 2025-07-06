import { memo } from "react";
import styles from './SocialMediaLine.module.css';
import { Marquee } from "@/shared/components";
import { SOCIAL_MEDIA } from "./const";

export const SocialMediaLine = memo(function SocialMediaLine() {
  return (
    <section className={styles.socialMediaLineWrapper}>
      <Marquee list={SOCIAL_MEDIA} />
    </section>
  )
})