import cn from "classnames";
import styles from "./Main.module.sass";
import Preview from "@/components/Preview";

import { blogs } from "@/mocks/blogs";
import BannerElement from "@/components/BannerElement";

type MainProps = {
    blog: any;
};

const Main = ({ blog }: MainProps) => {

    console.log(blog);


    return blog ? (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <BannerElement />
                <div className={cn("container", styles.container)}>
                    <div className={styles.date} data-aos='fade-up' data-aos-duration='2000'>{blog.date}</div>
                    <div className={cn("h4", styles.title)} data-aos='fade-up' data-aos-duration='2000'>{blog.title}</div>
                    <div className={styles.list}>
                        <div className={styles.item} data-aos='fade-up' data-aos-duration='2000'>
                            <div className={styles.category}>Written by</div>
                            <div className={styles.text}>{blog.author}</div>
                        </div>
                        <div className={styles.item} data-aos='fade-up' data-aos-duration='2000'>
                            <div className={styles.category}>Category</div>
                            <div className={styles.text}>{blog.category}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(styles.descriptionsection)}>
                <div className={cn("container", styles.container)}>
                    <div className={cn("h6", styles.description)} data-aos='fade-up' data-aos-duration='2000'>
                        {blog?.blogDescription}
                    </div>
                </div>
            </div>
        </>
    ) : null;
};

export default Main;
