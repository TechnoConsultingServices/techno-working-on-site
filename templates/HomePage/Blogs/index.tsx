import Link from "next/link";
import cn from "classnames";
import styles from "./Blogs.module.sass";
import Blog from "@/components/Blog";

import { BlogsType } from "@/types/index";

type BlogsProps = {
    items: BlogsType[];
};

const Blogs = ({ items }: BlogsProps) => (
    <div className={cn("section-black section-pd128", styles.section, styles.mash)}>
        <div className={"container"}>
            <div className={styles.head}>
                <div className={cn("label", styles.label)} data-aos='fade-up' data-aos-duration='2000'>OUR BLOGS</div>
                <div className={cn("h5", styles.title)} data-aos='fade-up' data-aos-duration='2000'>
                    Sharing is caring so we make time to write about our
                    experience.
                </div>
            </div>
            <div className={styles.list}>
                {items.slice(0, 3).map((blog) => (
                    <Blog item={blog} key={blog.id} light grid />
                ))}
            </div>
            <div className={styles.btns}>
                <Link
                    className={cn("button-light", styles.button)}
                    href="/blogs"
                    data-aos='fade-up' data-aos-duration='2000'
                >
                    VIEW ALL POSTS
                </Link>
            </div>
        </div>
    </div>
);

export default Blogs;
