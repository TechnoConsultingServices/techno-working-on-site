import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import ButtonCircle from "@/components/ButtonCircle";
import cn from "classnames";
import styles from "./Main.module.sass";
import BannerElement from "@/components/BannerElement";

const TEXTS = ["Innovating...", "Transforming...", "Growing...", "Thriving..."];

type MainProps = {
  scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={cn("section-main section-brown", styles.section)}>
      <BannerElement />
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            className={cn("h1", styles.title)}>
            Keep
            <div className={styles.word}>
              <TextTransition springConfig={presets.slow} inline>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </div>
          </div>
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            className={styles.info}>
            With Techno Consulting
          </div>
        </div>
        <div
          className={styles.actions}
          data-aos='fade-in'
          data-aos-duration='2000'
          data-aos-delay='300'>
          <ButtonCircle
            className={styles.button}
            icon='arrow-up-right'
            image='/images/get-in-touch.svg'
            href='/contact'
          />
        </div>
      </div>
      <button
        className={styles.scroll}
        onClick={() =>
          scrollToRef.current.scrollIntoView({
            behavior: "smooth",
          })
        }>
        DISCOVER MORE
        <span className={styles.mouse}>
          <span className={styles.line}></span>
        </span>
      </button>
    </div>
  );
};

export default Main;
