import { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";

import { LinksType } from "@/types/index";
import Preview from "@/components/Preview";
import BannerElement from "@/components/BannerElement";
import ArrowIcon from "lib/Icons/ArrowIcon";

type ListingProps = {
    title: string;
    links: LinksType[];
    scrollToRef?: any;
};

const Main = ({ title, links, scrollToRef }: ListingProps) => {
    const [active, setActive] = useState<string>(links[0].value);

    const handleClick = (value: string) => {
        // setActive(value);
        // scrollToRef &&
        //     scrollToRef.current.scrollIntoView({
        //         behavior: "smooth",
        //     });
    };

    return (
        <>        
            <div
                className={cn(
                    "section-main section-brown",
                    styles.section
                )}
            >
                <BannerElement />
                <div className={cn("container", styles.container)}>
                    <div className={styles.links}>
                        <button className={cn(styles.link)} data-aos='fade-up' data-aos-duration='2000'>
                            <span className={cn("heading", styles.heading)}>Current Opening</span>
                        </button>
                        {links.map((link, index) => (
                            <a
                                href={link?.careerPageLink ? link?.careerPageLink : "https://www.linkedin.com/company/technoconsulting-in/jobs/"}
                                target="_blank"
                                rel="noreferrer"
                                className={cn(styles.link, {
                                    [styles.active]: link.value === active,
                                })}
                                key={index}
                                onClick={() => handleClick(link.value)}
                                data-aos='fade-up' data-aos-duration='2000'
                            >
                                <span className={styles.text}>{link.title}</span>
                            </a>
                        ))}
                    </div>
                    <div className={cn("h4", styles.title)} data-aos='fade-up' data-aos-duration='2000'>{title}</div>
                </div>
            </div>
            <Preview
                className={cn(styles.preview)}
                image="/images/careers/careers_banner.jpg"
            />
        </>
    );
};

export default Main;
