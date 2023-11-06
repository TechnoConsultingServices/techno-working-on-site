import { useEffect, useState } from "react";
import Link from "next/link";
import TextTransition, { presets } from "react-text-transition";
import cn from "classnames";
import styles from "./Footer.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import Socials from "@/components/Socials";
import Image from "next/image";

const navigation = [
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Services",
        url: "/services",
    },
    // {
    //     title: "Projects",
    //     url: "/projects",
    // },
    {
        title: "Careers",
        url: "/careers",
    },
    {
        title: "Blogs",
        url: "/blogs",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];

const socials = [
    // {
    //     icon: "facebook",
    //     url: "https://www.facebook.com/",
    // },
    // {
    //     icon: "twitter",
    //     url: "https://twitter.com/",
    // },
    // {
    //     icon: "instagram",
    //     url: "https://www.instagram.com/",
    // },
    {
        icon: "linkedInFull",
        url: "https://www.linkedin.com/",
    },
];

const TEXTS = ["great", "new", "big"];

type FooterProps = {
    empty?: boolean;
};

const Footer = ({ empty }: FooterProps) => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <footer className={cn(styles.footer, { [styles.footerEmpty]: empty })}>
            <div className={cn("container", styles.container)}>
                {!empty && (
                    <>
                        <div className={styles.row} data-aos='fade-up' data-aos-duration='2000'>
                            <div className={cn("h2", styles.title)}>
                                <span>Let’s start</span>
                                <span>something</span>
                                <span>
                                    <span className={styles.word}>
                                        <TextTransition
                                            springConfig={presets.slow}
                                            inline
                                        >
                                            {TEXTS[index % TEXTS.length]}&nbsp;
                                        </TextTransition>
                                    </span>
                                    together
                                </span>
                            </div>
                            <ButtonCircle
                                className={styles.button}
                                icon="arrow-up-right"
                                image="/images/get-in-touch.svg"
                                href="/contact"
                            />
                        </div>
                    </>
                )}
                <div className={styles.separator}></div>
                {!empty && (
                    <div className={styles.line}>
                        <nav className={styles.navigation}>
                            {navigation.map((link, index) => (
                                <Link
                                    className={styles.link}
                                    href={link.url}
                                    key={index}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                        {/* <Socials items={socials} /> */}
                        <div className={styles.social}>
                           <span>Follow us on: </span><Socials items={socials} />
                        </div>
                    </div>
                )}
                <div className={styles.foot}>
                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} Techno Consulting Services, All rights reserved
                    </div>
                    {/* <a
                        className={styles.policy}
                        // href="#"
                        // target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
