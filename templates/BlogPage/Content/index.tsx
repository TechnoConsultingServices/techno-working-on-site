import cn from "classnames";
import styles from "./Content.module.sass";
import Image from "@/components/Image";

const Content = ({ blogContent, conclusion, credits }: any) => {
  return blogContent ? (
    <div className={cn(styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className="content-wrappper">
          {blogContent?.map(
            (
              item: { contentTitle: string; content: string; image: string },
              index: number
            ) => {
              return (
                <div key={index} className={cn(styles.head)}>
                  <div
                    className={cn("h6", styles.title)}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    {item.contentTitle}
                  </div>
                  <div
                    className={styles.text}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                  <Image
                    src={item.image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  ) : conclusion ? (
    <div className={cn(styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className="content-wrappper">
          <div className={cn(styles.head)}>
            <div
              className={cn("h6", styles.title)}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Conclusion
            </div>
            <div
              className={styles.text}
              data-aos="fade-up"
              data-aos-duration="2000"
              dangerouslySetInnerHTML={{ __html: conclusion }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  ) : credits ? (
    <div>
      <div className={cn("container", styles.container)}>
        <div
          className={styles.credit}
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {credits}
        </div>
      </div>
    </div>
  ) : null;
};

export default Content;
