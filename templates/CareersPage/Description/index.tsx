import cn from "classnames";
import styles from "./Description.module.sass";
import Image from "@/components/Image";

const images = [
    "/images/silhouette.jpg",
    "/images/silhouette.jpg",
    "/images/silhouette.jpg",
];

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={styles.list}>
                {images.map((image, index) => (
                    <div className={cn("image", styles.image)} key={index} data-aos='fade-up' data-aos-duration='2000'>
                        <Image
                            src={image}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                            alt=""
                        />
                    </div>
                ))}
                <div className={styles.blockquote} data-aos='fade-up' data-aos-duration='2000'>
                    <div className={styles.quote}>
                        <Image
                            src="/images/quote_blue.svg"
                            width={64}
                            height={52}
                            alt="Quote"
                        />
                    </div>
                    <div className={cn("h6", styles.content)}>
                        where ideas flourish, and businesses thrive in the digital realm.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Description;
