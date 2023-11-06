import Layout from "@/components/Layout";
import Main from "./Main";
import Story from "./Story";
import Preview from "@/components/Preview";
import Values from "./Values";
import Team from "./Team";
import Companies from "@/components/Companies";
import Description from "./Description";

import { team } from "@/mocks/team";
// import { companies } from "@/mocks/companies";
import { stacks } from "@/mocks/stacks";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Main />
      <Story />
      <div
        style={{ position: "relative", overflow: "hidden", height: "480px" }}>
        <Image
          src='/images/about/aboutpage_banner.png'
          alt='Homepage Banner'
          fill
          style={{ objectFit: "cover" }}
          sizes='(max-width: 767px) 100vw, 50vw'
        />
      </div>
      <Values />
      {/* <Team items={team} />
      <Companies
        className='section-mb160 align-start image-bw'
        title='Industry Leaders Trust more than 150 Technology since 2012'
        items={stacks}
      />
      <Description /> */}
    </Layout>
  );
};

export default AboutPage;
