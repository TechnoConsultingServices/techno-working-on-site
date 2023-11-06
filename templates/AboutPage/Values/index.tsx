import cn from "classnames";
import styles from "./Values.module.sass";

const list = [
  {
    title: "We are driven by expertise.",
    content:
      "Our team comprises seasoned professionals who bring deep industry knowledge and technical proficiency to every project. We continuously enhance our skills to stay at the forefront of technology and provide innovative solutions that drive tangible results.",
  },
  {
    title: "We prioritize their needs.",
    content:
      "We strive to exceed their expectations. By deeply understanding their challenges and objectives, we deliver tailored technology solutions that create value and drive their business forward.",
  },
  {
    title: "We hold ourselves to the highest.",
    content:
      "We are committed to delivering top-notch technology solutions that are of exceptional quality, reliability, and functionality. We constantly seek improvement, staying abreast of the latest advancements and industry best practices.",
  },
  {
    title: "We are passionate about empowering.",
    content:
      "We believe in equipping our clients with the tools and strategies they need to succeed in the digital age. Our goal is to empower businesses to reach new heights and unleash their full potential.",
  },
];

type ValuesProps = {};

const Values = ({}: ValuesProps) => (
  <div className={cn("section-mb160", styles.section, styles.mash)}>
    <div className={"container"}>
      <div
        className={cn("label", styles.label)}
        data-aos='fade-up'
        data-aos-duration='2000'>
        OUR VALUES
      </div>
      <div
        className={cn("h7", styles.subtitle)}
        data-aos='fade-up'
        data-aos-duration='2000'>
        Here are they constantly seek new ideas and technologies to deliver
        transformative solutions.
      </div>
      <div className={styles.list}>
        {list.map((item, index) => (
          <div className={styles.item} key={index}>
            <div
              className={cn("h5", styles.title)}
              data-aos='fade-up'
              data-aos-duration='2000'
              data-aos-delay={(index + 1) * 100}>
              {item.title}
            </div>
            <div
              className={styles.content}
              data-aos='fade-up'
              data-aos-duration='2000'
              data-aos-delay={(index + 1) * 100}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Values;
