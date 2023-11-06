import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import ButtonCircle from "@/components/ButtonCircle";
import Link from "next/link";
import Description from "../Description";
import BannerElement from "@/components/BannerElement";
import { useState } from "react";
import Modal from "@/components/Modal";

const images = [
  "/images/services/service-photo-1.jpg",
  "/images/services/service-photo-2.jpg",
  "/images/services/service-photo-3.jpg",
  "/images/services/service-photo-4.jpg",
  "/images/services/service-photo-5.jpg",
  "/images/services/service-photo-6.jpg",
  "/images/services/service-photo-7.jpg",
  "/images/services/service-photo-8.jpg",
];

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
            Succeed on Your Path to Digital Excellence
          </div>
          <div
            className={styles.info}
            data-aos='fade-up'
            data-aos-duration='2000'>
            At Techno Consulting Services, we offer an extensive array of
            digital solutions meticulously crafted to empower your brand,
            captivate your audience, and drive unprecedented growth.
          </div>
        </div>
      </div>
      <div className={cn(styles.mash)}>
        <div className={cn("section-mb160", styles.gallery)}>
          <div
            className={styles.images}
            data-aos='fade-up'
            data-aos-duration='2000'
            data-aos-delay='500'>
            {images.map((image, index) => (
              <div className={cn("image", styles.image)} key={index}>
                {index === 1 ? (
                  <video
                    className={styles.bannerVideo}
                    muted
                    loop
                    autoPlay
                    >
                    <source
                      src='/videos/servicespage.mp4'
                      type='video/mp4'
                    />
                  </video>
                ) : (
                  <Image
                    src={image}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes='(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw'
                    alt=''
                  />
                )}
              </div>
            ))}
          </div>
          <ButtonCircle
            className={styles.button}
            icon='eye'
            image='/images/play-showreel.svg'
            onClick={() => setVisibleModal(true)}
            small
          />
        </div>
        <Modal
          visible={visibleModal}
          onClose={() => setVisibleModal(false)}
          video>
          <video className={styles.videoModal} muted loop playsInline controls>
            <source
              src='/videos/servicespage.mp4'
              type='video/mp4'
            />
          </video>
        </Modal>

        <Description />
      </div>
    </>
  );
};

export default Main;
