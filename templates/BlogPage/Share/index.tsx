import cn from "classnames";
import styles from "./Share.module.sass";
import Socials from "@/components/Socials";

const socials = [
    {
        icon: "facebook",
        url: "https://www.facebook.com/technoconsulting.net/",
    },
    {
        icon: "twitter",
        url: "https://twitter.com/technoconsulting",
    },
    {
        icon: "linkedin",
        url: "https://www.linkedin.com/company/technoconsulting-in",
    },
];

type ShareProps = {};

const Share = ({}: ShareProps) => (
    <div className={cn("section-mb120", styles.section)}>
        <div className={"container"}>
            <div className={styles.line}>
                <div className={styles.text}>Share</div>
                <Socials items={socials} dark />
            </div>
        </div>
    </div>
);

export default Share;
