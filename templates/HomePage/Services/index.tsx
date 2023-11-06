import Link from "next/link";
import cn from "classnames";
import styles from "./Services.module.sass";
import { ServicesType } from "@/types/index";
import ArrowIcon from "lib/Icons/ArrowIcon";

type ServicesProps = {
  items: ServicesType[];
};

const Services = ({ items }: ServicesProps) => (
  <div className={cn(styles.section, styles.mash)}>
    <div className={"container"}>
      <div
        className={cn("label", styles.label)}
        data-aos='fade-up'
        data-aos-duration='2000'>
        OUR SERVICE
      </div>
      <div
        className={cn("h7", styles.info)}
        data-aos='fade-up'
        data-aos-duration='2000'
        data-aos-delay='500'>
        We are a renowned industry leader in the realm of digital solutions,
        placing a strong emphasis on product development and co-innovation
        partnerships. Our expertise lies in transforming your ideas into
        tangible and competitive products, ensuring optimal efficiency. As your
        trusted co-innovation partner, we establish a deep understanding of your
        business to help shape a compelling vision for the future. At our core,
        we are dedicated to bringing your ideas to life and driving meaningful
        innovation in the digital landscape.
      </div>
      <div className={styles.list}>
        {items.slice(0, 5).map((service, index) => (
          <Link
            className={styles.item}
            key={service.id}
            href={`/services/${service.id}`}>
            <div
              className={cn("label", styles.number)}
              data-aos='fade-up'
              data-aos-duration='2000'
              data-aos-delay='500'>
              {index < 9 ? `0${index + 1}` : index + 1}
            </div>
            <div
              className={styles.title}
              data-aos='fade-up'
              data-aos-duration='2000'
              data-aos-delay='700'>
              {service.title}
            </div>
            <div
              className={styles.arrow}
              data-aos='fade-up'
              data-aos-duration='2000'
              data-aos-delay='800'>
              <ArrowIcon />
            </div>
          </Link>
        ))}
      </div>
      <Link
        className={cn("button", styles.button)}
        href='/services'
        data-aos='fade-up'
        data-aos-duration='2000'>
        VIEW SERVICE IN DETAIL
      </Link>
    </div>
  </div>
);

export default Services;
