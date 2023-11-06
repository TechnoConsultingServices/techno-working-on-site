import Form from "../Form";
import Socials from "@/components/Socials";
import styles from "../Main/Main.module.sass";
import { useRef } from "react";
import cn from "classnames";

const socials = [
  {
    icon: "facebook",
    url: "https://www.facebook.com/",
  },
  {
    icon: "twitter",
    url: "https://twitter.com/",
  },
  {
    icon: "instagram",
    url: "https://www.instagram.com/",
  },
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/company/technoconsulting-in/",
  },
];

const FormWrapper = () => {
  const scrollToRef = useRef<any>(null);

  return (
    <div className={cn("section-main", styles.section, styles.mash)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.row}>
            <div className={styles.anchor} ref={scrollToRef}></div>
            <Form />
            <div className={styles.sidebar}>
                <div className={styles.list}>
                <div className={styles.item} data-aos='fade-up' data-aos-duration='2000'>
                    <div className={styles.category}>CALL US</div>
                    <div className={styles.text}>
                    <a
                        className={styles.phone}
                        href='tel:+918940231951'
                        rel='noopener noreferrer'>
                        +91 89402 31951
                    </a>
                    </div>
                </div>
                <div className={styles.item} data-aos='fade-up' data-aos-duration='2000' data-aos-delay='200'>
                    <div className={styles.category}>HEADQUARTERS</div>
                    <div className={styles.text}>
                    <p>Vadavalli, Coimbatore</p>
                    <p>TamilNadu 641046</p>
                    <p>India</p>
                    </div>
                </div>
                <div className={styles.item} data-aos='fade-up' data-aos-duration='2000' data-aos-delay='400'>
                    <Socials items={socials} dark />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default FormWrapper;
