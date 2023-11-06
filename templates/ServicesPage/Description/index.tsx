import Link from "next/link";
import cn from "classnames";
import styles from "./Description.module.sass";

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => (
    <div className={cn("section-separator section-mb160", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.col}>
                <div className={cn("h5", styles.title)} data-aos='fade-up' data-aos-duration='2000'>
                    Ready to Elevate Your Digital Presence?
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.content}>
                    <p data-aos='fade-up' data-aos-duration='2000'>
                        Digital solutions have the power to reshape industries, optimize processes, and elevate customer experiences. Our tailored solutions can be seamlessly adapted to your specific needs, ensuring scalability and sustainable growth. Let's connect and embark on an exhilarating journey to unlock your digital potential. Reach out today to set the wheels of digital success in motion.
                    </p>
                </div>
                <Link className="button" href="/contact" data-aos='fade-up' data-aos-duration='2000' data-aos-delay='500'>
                    GET IN TOUCH
                </Link>
            </div>
        </div>
    </div>
);

export default Description;
