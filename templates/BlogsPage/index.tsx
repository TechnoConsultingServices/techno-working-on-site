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

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Layout>
            <Listing
                title="Explore Our Blog for Tech Trends, Innovation, and Digital Transformation"
                links={linksBlogs}
                scrollToRef={scrollToRef}
            />
            <Blogs items={blogs} scrollToRef={scrollToRef} />
        </Layout>
    );
};

export default BlogsPage;
