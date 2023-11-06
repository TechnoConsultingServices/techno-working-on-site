import { useRef } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import BannerElement from "@/components/BannerElement";

type MainProps = {};

const Main = ({}: MainProps) => {
    const scrollToRef = useRef<any>(null);

    return (
        <div className={cn("section-main section-brown", styles.section)}>
            <BannerElement className="max-height" />
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.wrap}>
                        <div className={cn("h2", styles.title)} data-aos='fade-up' data-aos-duration='2000'>
                            Let’s work together!
                        </div>
                        {/* <div className={styles.content}>
                            <p>
                                Let us help you become even greater at what you
                                do.
                            </p>
                            <p>
                                Fill out the following form and we will get back
                                to you in the next 24 hours.
                            </p>
                        </div> */}
                    </div>
                    <ButtonCircle
                        className={styles.button}
                        icon="arrow-down-right"
                        image="/images/get-in-touch.svg"
                        onClick={() =>
                            scrollToRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
