import Link from "next/link";
import cn from "classnames";
import styles from "./Blog.module.sass";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import ArrowIcon from "lib/Icons/ArrowIcon";

type BlogProps = {
    className?: string;
    item: any;
    light?: boolean;
    cell?: boolean;
    grid?: boolean;
};

const Blog = ({ className, item, light, cell, grid = false }: BlogProps) => (
    <Link
        className={cn(
            styles.blog,
            {
                [styles.blogLight]: light,
                [styles.blogCell]: cell,
                [styles.gridView]: grid,
            },
            className
        )}
        href={`/blogs/${item.id}`}
        data-aos='fade-up' data-aos-duration='2000'
    >
        <div className={styles.preview}>
            <Image
                src={item.image}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 767px) 100vw, 50vw"
                alt=""
            />
        </div>
        <div className={styles.details}>
            <div className={cn("h6", styles.title)}>{item.title}</div>
            <div className={styles.line}>
                <div className={styles.category}>{item.category}</div>
                <div className={styles.date}>{item.date}</div>
            </div>
            <div className={styles.arrow}>
                <ArrowIcon />
            </div>
        </div>
    </Link>
);

export default Blog;
