import cn from "classnames";
import styles from "./Gallery.module.sass";
import Image from "@/components/Image";

const gallery = [
    "/images/careers/careers-gallery-1.jpg",
    "/images/careers/careers-gallery-2.jpg",
    "/images/careers/careers-gallery-3.jpg",
    "/images/careers/careers-gallery-4.jpg"
];

type GalleryProps = {};

const Gallery = ({}: GalleryProps) => (
    <div className={cn("section-mb160", styles.section, styles.mash)}>
        <div className={"container"}>
            <div className={styles.gallery}>
                {gallery.map((image, index) => (
                    <div className={cn("image", styles.image)} key={index} data-aos='fade-up' data-aos-duration='2000'>
                        <Image
                            src={image}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 767px) 100vw, 50vw"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Gallery;
