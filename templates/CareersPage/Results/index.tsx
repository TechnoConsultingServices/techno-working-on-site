import cn from "classnames";
import styles from "./Results.module.sass";

const result = [
    "Accelerate your career trajectory with our proficiency and innovative approach to drive your digital transformation.",
    "Journey through well-defined growth paths, bolstered by skill development programs and mentorship, empowering you to reach your full potential.",
    "Contribute to a diverse, inclusive workspace that treasures collaboration. Your unique perspectives enrich our culture, leading to inventive solutions and a supportive community.",
    "Enjoy a balanced work-life through flexible schedules, remote work options, and personalized arrangements tailored to your individual needs.",
    "Receive a competitive salary, comprehensive benefits package, and performance-based incentives that acknowledge and celebrate your contributions.",
    "Engage in captivating projects utilizing the latest technologies. Foster ongoing learning and professional growth at the forefront of innovation.",
    "Become a part of an organization with a profound mission. Contribute to a positive societal impact, finding purpose and fulfillment in your work."
];

const list = [
    {
        value: "+182%",
        description: "Number of pages view grew",
    },
    {
        value: "+153%",
        description: "Time spent on pages per session",
    },
    {
        value: "+247%",
        description: "Average session duration increased by",
    },
];

type ResultsProps = {};

const Results = ({}: ResultsProps) => (
    <div
        className={cn("section-pd section-black", styles.section, styles.mash)}
    >
        <div className={"container"}>
            <div className={styles.row}>
                <div className={cn("label", styles.label)} data-aos='fade-up' data-aos-duration='2000'>BENEFITS</div>
                <div className={styles.wrap}>
                    <div className={cn("h6", styles.title)} data-aos='fade-up' data-aos-duration='2000'>
                        Empowering Your Career Journey
                    </div>
                    <div className={styles.result}>
                        {result.map((item, index) => (
                            <div className={styles.box} key={index} data-aos='fade-up' data-aos-duration='2000'>
                                <div className={cn("label", styles.number)}>
                                    {index < 9 ? `0${index + 1}` : index + 1}
                                </div>
                                <div className={styles.content}>{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index} data-aos='fade-up' data-aos-duration='2000'>
                        <div className={cn("h3", styles.value)}>
                            {item.value}
                        </div>
                        <div className={styles.description}>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    </div>
);

export default Results;
