import { useState } from "react";
import { useRef } from "react";
import Layout from "@/components/Layout";
import Listing from "@/components/Listing";
import Blogs from "./Blogs";

import { linksBlogs } from "@/mocks/links";
import { blogs } from "@/mocks/blogs";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogsPage = () => {
  const scrollToRef = useRef<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const sortedBlogs = blogs.sort((a, b) => (a.id < b.id ? 1 : -1));

  const onClick = (value: string) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Listing
        title="Explore Our Blog for Tech Trends, Innovation, and Digital Transformation"
        links={linksBlogs}
        scrollToRef={scrollToRef}
        onClick={onClick}
      />
      <Blogs
        items={sortedBlogs}
        selectedCategory={selectedCategory}
        scrollToRef={scrollToRef}
      />
    </Layout>
  );
};

export default BlogsPage;
