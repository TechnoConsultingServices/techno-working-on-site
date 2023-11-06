import { useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Preview from "@/components/Preview";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Advantages from "./Advantages";
import Projects from "@/components/Projects";
import Reviews from "./Reviews";
import Companies from "@/components/Companies";
import Blogs from "./Blogs";

import { services } from "@/mocks/services";
import { projects } from "@/mocks/projects";
import { reviews } from "@/mocks/reviews";
import { stacks } from "@/mocks/stacks";
import { blogs } from "@/mocks/blogs";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "@/components/Image";
import classNames from "classnames";

const HomePage = () => {
  const scrollToRef = useRef<any>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Main scrollToRef={scrollToRef} />
      <div ref={scrollToRef}></div>
      <div
        style={{ position: "relative", overflow: "hidden", height: "480px" }}>
        <div className={classNames("container")}>
          <div
            data-aos='fade-up'
            data-aos-duration='2000'
            style={{
              paddingTop: "80px",
              maxWidth: "693px",
              position: "relative",
              zIndex: 9,
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "34px",
            }}>
            We deliver innovative digital solutions through product development
            and co-innovation partnerships. Experience growth and efficiency
            with our tailored approach. Partner with us and experience the
            difference we can make for your business.
          </div>
        </div>
        <Image
          src='/images/home/homepage_banner.png'
          alt='Homepage Banner'
          fill
          // style={{ objectFit: "cover" }}
          sizes='(max-width: 767px) 100vw, 50vw'
        />
      </div>
      <AboutUs />
      <Services items={services} />
      <Advantages />
      {/* <Projects
                className="section-mb160 section-separator"
                title="Take a look at our most successful projects"
                label="OUR PROJECTS"
                items={projects}
                viewItem={4}
                viewAll="VIEW ALL PROJECT"
            /> */}
      {/* <Reviews items={reviews} /> */}
      <Companies
        className='section-mb160 stacks'
        info='Our key tech stacks'
        items={stacks}
      />
      <Blogs items={blogs} />
    </Layout>
  );
};

export default HomePage;
