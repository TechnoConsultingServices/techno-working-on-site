import cn from "classnames";
import styles from "./Details.module.sass";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from "react";

const list = [
  {
    title: "Concept Development",
    content:
      "We help you refine your ideas, conduct market research, and identify the unique selling points of your product. ",
  },
  {
    title: "Agile Development",
    content:
      "We follow agile development methodologies to ensure flexibility, transparency, and continuous improvement.",
  },
  {
    title: "Quality Assurance",
    content:
      "We maintain stringent quality standards throughout the development process.",
  },
];

type DetailsProps = {
  service: any;
};

const Details = ({ service }: DetailsProps) => {
  return service ? (
    <div className={cn("section-mb120", styles.section, styles.mash)}>
      <div className={"container"}>
        <div className={styles.head}>
          <div
            className={cn("h5", styles.title)}
            data-aos='fade-up'
            data-aos-duration='2000'>
            {service?.detailsTitle}
          </div>
          <div
            className={styles.text}
            data-aos='fade-up'
            data-aos-duration='2000'>
            {service.detailsDescription}
          </div>
        </div>
        <div className={styles.list}>
          {service.detailsList.map(
            (item: { title: string; content: string }, index: number) => (
              <div
                className={styles.item}
                key={index}
                data-aos='fade-up'
                data-aos-duration='2000'
                data-aos-delay={(index + 1) * 200}>
                <div className={cn("label", styles.number)}>
                  {index < 9 ? `0${index + 1}` : index + 1}
                </div>
                <div className={cn("h6", styles.subtitle)}>{item.title}</div>
                <div className={styles.content}>{item.content}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default Details;
