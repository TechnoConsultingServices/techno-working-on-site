import { useState } from "react";
import cn from "classnames";
import styles from "./Listing.module.sass";

import { LinksType } from "@/types/index";
import BannerElement from "../BannerElement";

type ListingProps = {
  title: string;
  links: LinksType[];
  scrollToRef?: any;
  onClick: any;
};

const Listing = ({ title, links, scrollToRef, onClick }: ListingProps) => {
  const [active, setActive] = useState<string>(links[0].value);

  const handleClick = (value: string) => {
    setActive(value);
    scrollToRef &&
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
      });
    onClick(value);
  };

  return (
    <div
      className={cn("section-main section-mb120 section-brown", styles.section)}
    >
      <BannerElement />
      <div className={cn("container", styles.container)}>
        <div
          className={cn("h4", styles.title)}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {title}
        </div>
        <div className={styles.links}>
          {links.map((link, index) => (
            <button
              className={cn(styles.link, {
                [styles.active]: link.value === active,
              })}
              key={index}
              onClick={() => handleClick(link.value)}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <span className={styles.text}>{link.title}</span>
              <span className={styles.counter}>{link.counter}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
