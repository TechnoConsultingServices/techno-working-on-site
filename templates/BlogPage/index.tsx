import Layout from "@/components/Layout";
import Main from "./Main";
import Content from "./Content";
import Preview from "@/components/Preview";
import Review from "@/components/Review";
import Gallery from "@/components/Gallery";
import Share from "./Share";
import Posts from "@/components/Posts";
import styles from "./BlogPage.module.sass";

import { blogs } from "@/mocks/blogs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import cn from "classnames";

const reviewAuthor = {
  content:
    "Explore groundbreaking innovations, technologies, and breakthrough ideas that are reshaping industries and transforming businesses.",
};

const gallery = [
  {
    image: "/images/silhouette.jpg",
  },
  {
    image: "/images/silhouette.jpg",
  },
];

const BlogPage = ({ id }: any) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const blog = blogs.find((blog) => blog.id === id);

  return (
    <Layout>
      <Main blog={blog} />
      {blog?.startImage && <Preview image={blog?.startImage} />}
      <Content blogContent={blog?.blogContent} />
      {blog?.endImage && <Preview image={blog?.endImage} />}
      {blog?.conclusion && (
        <Content conclusion={blog?.conclusion} />
      )}
      {blog?.credits && (
        <Content credits={blog?.credits} />
      )}
      <Share />
      {/*       
      <div className={styles.mash}>
        <Review className='section-mb120' review={reviewAuthor} />
        <Gallery images={gallery} />
        <Preview
          className='section-mb120'
          image='/images/silhouette.jpg'
        />
      </div> */}

      <Posts items={blogs.slice(0, 3)} showMash={true} />
    </Layout>
  );
};

export default BlogPage;
