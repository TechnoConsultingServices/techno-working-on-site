import cn from "classnames";
import styles from "./Plans.module.sass";

const list = [
  {
    title: "Ideation and Conceptualization",
    content:
      "We work closely with you to understand your goals, target market, and unique value proposition. Our team assists in refining your ideas, conducting market research, and creating a solid foundation for your product's success.",
  },
  {
    title: "User-Centric Design",
    content:
      "We prioritize user experience (UX) and user interface (UI) design to create intuitive, visually appealing, and engaging products. Through wireframing, prototyping, and iterative design processes, we ensure that your solution aligns perfectly with user expectations.",
  },
  {
    title: "Agile Development Methodology",
    content:
      "Our agile approach enables flexibility, adaptability, and faster time-to-market. By breaking down the development process into iterative sprints, we deliver incremental releases, allowing for regular feedback and seamless integration of new features.",
  },
  {
    title: "Quality Assurance and Testing",
    content:
      "We maintain strict quality standards throughout the development process. Our experienced QA team conducts comprehensive testing, ensuring that your product functions flawlessly, providing a seamless user experience.",
  },
];

type PlansProps = {
  service: any;
};

const Plans = ({ service }: PlansProps) => 
service &&
(
  <div className={cn("section-mb120", styles.section, styles.mash)}>
    <div className={"container"}>
      <div
        className={cn("h5", styles.title)}
        data-aos='fade-up'
        data-aos-duration='2000'>
        {service.plansTitle}
      </div>
      <div className={styles.list}>
        {service.plansList.map(
          (item: { title: string; content: string }, index: number) => (
            <div
              className={styles.item}
              key={index}
              data-aos='fade-up'
              data-aos-duration='2000'>
              {/* <div className={cn("label", styles.number)}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </div> */}
              <div className={cn("h7", styles.subtitle)}>{item.title}</div>
              <div className={styles.content}>{item.content}</div>
            </div>
          )
        )}
      </div>
    </div>
  </div>
);

export default Plans;
