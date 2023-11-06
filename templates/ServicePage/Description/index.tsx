import Link from "next/link";
import cn from "classnames";
import styles from "./Description.module.sass";

type DescriptionProps = {
  galleryDescription: any;
};

const Description = ({ galleryDescription }: DescriptionProps) => {
  return galleryDescription ? (
    <div className={cn(styles.section)}>
      <div className={cn("container", styles.container)}>
        <div
          className={cn("h5", styles.title)}
          data-aos='fade-up'
          data-aos-duration='2000'>
          {galleryDescription.title}
        </div>
        <div
          className={styles.wrap}
          data-aos='fade-up'
          data-aos-duration='2000'>
          <div className={styles.content}>{galleryDescription.description}</div>
          <Link
            className={cn("button button-light", styles.button)}
            href={galleryDescription.buttonLink}
            data-aos='fade-up'
            data-aos-duration='2000'>
            {galleryDescription.buttonText}
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};

export default Description;
