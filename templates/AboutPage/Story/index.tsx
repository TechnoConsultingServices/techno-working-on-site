import cn from "classnames";
import styles from "./Story.module.sass";

type StoryProps = {};

const Story = ({}: StoryProps) => (
    <div className={cn(styles.section, styles.mash)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)} data-aos='fade-up' data-aos-duration='2000'>OUR STORY</div>
            <div className={cn("h6", styles.content)} data-aos='fade-up' data-aos-duration='2000'>
                We are driven by a passion for innovation and a commitment to client success. Our team of experts combines industry knowledge with technical prowess to provide strategic guidance and implement transformative solutions.
            </div>
        </div>
    </div>
);

export default Story;
