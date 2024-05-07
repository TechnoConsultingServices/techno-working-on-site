import Link from "next/link";
import cn from "classnames";
import styles from "./Blogs.module.sass";
import Blog from "@/components/Blog";

import { BlogsType } from "@/types/index";

type BlogsProps = {
  items: BlogsType[];
  selectedCategory: string;
  scrollToRef?: any;
};

const Blogs = ({ items, selectedCategory, scrollToRef }: BlogsProps) => {
  const filteredBlogs =
    selectedCategory && selectedCategory != "all-blogs"
      ? items?.filter((ele) => ele.category?.toLowerCase() == selectedCategory)
      : items;
  return (
    <div className={cn("", styles.section, styles.mash)}>
      {scrollToRef && <div className={styles.anchor} ref={scrollToRef}></div>}
      <div className={"container"}>
        <div className={styles.list}>
          {filteredBlogs.map((blog) => (
            <Blog item={blog} key={blog.id} />
          ))}
        </div>
        {/* <button className={cn("button", styles.button)}>LOAD MORE</button> */}
      </div>
    </div>
  );
};

export default Blogs;
