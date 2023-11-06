import Link from "next/link";
import cn from "classnames";
import styles from "./Services.module.sass";
import Icon from "@/components/Icon";

import { ServicesType } from "@/types/index";

type ServicesProps = {
  items: ServicesType[];
};

const Services = ({ items }: ServicesProps) => (
  <div className={cn("section-mb136", styles.section, styles.mash)}>
    <div className={"container"}>
      <div className={styles.head}>
        <div
          className={cn("label", styles.label)}
          data-aos='fade-up'
          data-aos-duration='2000'>
          OUR SERVICE
        </div>
        <div
          className={cn("h5", styles.title)}
          data-aos='fade-up'
          data-aos-duration='2000'>
          Explore a diverse range of services that propel your business forward
        </div>
      </div>
      <div className={styles.list}>
        {items.map((service, index) => (
          <div className={styles.item} key={service.id}>
            <div
              className={cn("label", styles.number)}
              data-aos='fade-up'
              data-aos-duration='2000'>
              {index < 9 ? `0${index + 1}` : index + 1}
            </div>
            <div className={styles.row}>
              <div
                className={cn("h4", styles.subtitle)}
                data-aos='fade-up'
                data-aos-duration='2000'>
                {service.title}
              </div>
              <div className={styles.wrap}>
                <div
                  className={styles.description}
                  data-aos='fade-up'
                  data-aos-duration='2000'>
                  {service.mainDescription}
                </div>
                <Link
                  className={cn("button", styles.button)}
                  href={`/services/${service.id}`}
                  data-aos='fade-up'
                  data-aos-duration='2000'
                  >
                  DISCOVER THE SERVICE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
