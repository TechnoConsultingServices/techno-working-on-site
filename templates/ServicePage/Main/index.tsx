import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import BannerElement from "@/components/BannerElement";

type MainProps = {
    service: any;
};

const Main = ({ service }: MainProps) => {
    return service ? (
        <>
            <div
                className={cn(
                    "section-main section-brown section-mb120",
                    styles.section
                )}
            >
                <BannerElement className={cn(
                    "max-height",
                    styles.bannerElement
                )} />
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)} data-aos='fade-up' data-aos-duration='2000'>
                        {service.title}
                    </div>
                    <div className={cn(styles.content, styles.contentMobile)} data-aos='fade-up' data-aos-duration='2000'>
                        {service.innerDescription} 
                    </div>
                    <div className={styles.row}>
                        <div className={cn("image", styles.image)} data-aos='fade-up' data-aos-duration='2000'>
                            <Image
                                src={service.bannerImage}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 767px) 100vw, 50vw"
                                alt=""
                            />
                        </div>
                        <div className={styles.wrap}>
                            <div
                                className={cn(
                                    styles.content,
                                    styles.contentDesktop
                                )}
                                data-aos='fade-up' data-aos-duration='2000'
                            >
                                {service.innerDescription}  
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h7", styles.info)} data-aos='fade-up' data-aos-duration='2000'>
                                    {service.subtitle}
                                </div>
                                <Link
                                    className={cn("button", styles.button)}
                                    href={service.subtitleBtnLink}
                                    data-aos='fade-up' data-aos-duration='2000'
                                >
                                    {service.subtitleBtnText}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
};

export default Main;
