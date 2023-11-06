import Link from "next/link";
import cn from "classnames";
import styles from "./Posts.module.sass";
import Blog from "@/components/Blog";

import { BlogsType } from "@/types/index";

type PostsProps = {
    items: BlogsType[];
    showMash?: boolean;
    showThankyouMash?: boolean;
};

const Posts = ({ items, showMash, showThankyouMash }: PostsProps) => (
    <div className={cn("section-pd section-black", styles.section, { [styles.mash]: showMash }, { [styles.mash2]: showThankyouMash }  )}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                <div className={cn("h5", styles.title)}>Related Posts</div>
                <Link
                    className={cn("button-light", styles.button)}
                    href="/blogs"
                >
                    VIEW ALL POSTS
                </Link>
            </div>
            <div className={styles.list}>
                {items.map((blog) => (
                    <Blog
                        className={styles.item}
                        item={blog}
                        key={blog.id}
                        cell
                        light
                    />
                ))}
            </div>
        </div>
    </div>
);

export default Posts;
