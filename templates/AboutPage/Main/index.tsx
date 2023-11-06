import { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import Modal from "@/components/Modal";
import BannerElement from "@/components/BannerElement";
import Image from "next/image";

type MainProps = {};

const Main = ({}: MainProps) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <>
      <div className={cn("section-main section-brown", styles.section)}>
        <BannerElement />
        <div className={cn("container", styles.container)}>
          <div
            className={cn("h4", styles.title)}
            data-aos='fade-up'
            data-aos-duration='2000'>
            Elevate Your Business with Our Cutting-Edge Technology Solutions!
          </div>
        </div>
      </div>
      <div className={cn(styles.sectionVideo)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrap}>
            <div className={styles.preview}>
              <video className={styles.bannerVideo} muted loop autoPlay>
                <source src='/videos/aboutpage.mp4' type='video/mp4' />
              </video>
            </div>
            <ButtonCircle
              className={styles.button}
              icon='eye'
              image='/images/play-showreel.svg'
              onClick={() => setVisibleModal(true)}
              small
            />
          </div>
        </div>
      </div>
      <Modal
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
        video>
        <video className={styles.videoModal} muted loop playsInline controls>
          <source src='/videos/aboutpage.mp4' type='video/mp4' />
        </video>
      </Modal>
    </>
  );
};

export default Main;
