import cn from "classnames";
import Link from "next/link";
import styles from "./Advantages.module.sass";
import Image from "next/image";

const list = [
  {
    title: "Day 1 DevOps adoption across projects with a Cloud Native approach",
    img: "day1",
  },
  {
    title: "Full Stack Engineers for continued rapid development & innovation",
    img: "fullstack",
  },
  {
    title: "Core Flex, Cost Effective Commercial Models Envision, Design, Deploy & Innovate approach",
    img: "core",
  },
  {
    title: "Incubation Program in collaboration with Industry & Academy",
    img: "incubation",
  },
];

type AdvantagesProps = {};

const Advantages = ({}: AdvantagesProps) => (
  <div
    className={cn(
      "section-mb160 section-pd section-black",
      styles.section,
      styles.mash
    )}>
    <div className={"container"}>
      <div
        className={cn("label", styles.label)}
        data-aos='fade-up'
        data-aos-duration='2000'>
        WHY CHOOSE US
      </div>
      <div className={cn("section-mb120", styles.row)}>
        <div className={styles.wrap}>
          <div
            className={cn("h5", styles.title)}
            data-aos='fade-up'
            data-aos-duration='2000'>
            Experience, Innovation, and Customer-Centric Solutions
          </div>
          <Link
            className={cn("button-light", styles.button)}
            href='/contact'
            data-aos='fade-up'
            data-aos-duration='2000'>
            LET’S WORK TOGETHER
          </Link>
        </div>
        <div className={styles.content}>
          <p data-aos='fade-up' data-aos-duration='2000'>
            Choose Techno Consulting Services for transformative digital
            solutions. Our expertise in product development and customer-centric
            approach ensures tailored solutions that drive growth and
            efficiency.
          </p>
          <p data-aos='fade-up' data-aos-duration='2000' data-aos-delay='200'>
            With proven results and rigorous quality standards, we are your
            trusted partner in the digital age. Experience the difference we can
            make for your business.
          </p>
        </div>
      </div>
      <div className={styles.list}>
        {list.map((item, index) => (
          <div className={styles.item} key={index}>
            <div
              className={cn("h3", styles.counter)}
              data-aos='fade-up'
              data-aos-duration='2000'
              data-aos-delay={(index + 1) * 200}>
              <Image src={`/images/home/${item.img}.svg`} alt={item.title} width={100} height={100} />
            </div>
            <div
              className={styles.subtitle}
              data-aos='fade-up'
              data-aos-duration='2000'
              data-aos-delay={(index + 1) * 200}>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Advantages;
