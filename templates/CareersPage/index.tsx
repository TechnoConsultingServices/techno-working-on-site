import Layout from "@/components/Layout";
import Main from "./Main";
import Overview from "./Overview";
import Gallery from "./Gallery";
import Review from "@/components/Review";
import Results from "./Results";
import Description from "./Description";
import Companies from "@/components/Companies";
import { companies } from "@/mocks/companies";
import styles from "./CareersPage.module.sass";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const careerOpenings = [
  {
    title: "Fullstack (NodeJS) Engineer",
    value: "Fullstack (NodeJS) Engineer",
    careerPageLink: 'https://www.linkedin.com/jobs/view/3749972351',
    counter: 47,
  },
  {
    title: ".NET Engineer (Core .NET & Blazor)",
    value: ".NET Engineer (Core .NET & Blazor)",
    counter: 38,
  },
  {
    title: "Full Stack Engineer (Python & Vue.js)",
    value: "Full Stack Engineer (Python & Vue.js)",
    counter: 31,
  },
];

const reviewAuthor = {
  // avatar: "/images/silhouette.jpg",
  man: "Senthil",
  position: "Chief executive officer",
  content:
    "Welcome to the Techno Consulting family, where your journey is the canvas, and your achievements are the masterpiece. Join us in crafting a future that blends innovation, creativity, and limitless possibilities. We invite you to be a part of our community, where we explore new horizons and create a positive change in the world, one idea at a time.",
};

const expertStack = [
  {
    id: "0",
    image: "/images/expertStack/pwa.png",
  },
  {
    id: "1",
    image: "/images/expertStack/dev-ops.png",
  },
  {
    id: "2",
    image: "/images/expertStack/vue.png",
  },
  {
    id: "3",
    image: "/images/expertStack/react.png",
  },
  {
    id: "4",
    image: "/images/expertStack/django.png",
  },
  {
    id: "5",
    image: "/images/expertStack/angular.png",
  },
  {
    id: "6",
    image: "/images/expertStack/typescript.png",
  },
  {
    id: "7",
    image: "/images/expertStack/nodejs.png",
  },
  {
    id: "8",
    image: "/images/expertStack/azure.png",
  },
  {
    id: "9",
    image: "/images/expertStack/kubernetes.png",
  },
];

const CareersPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Main title='Unlock Your Career Success' links={careerOpenings} />
      <Overview />
      <Gallery />
      <Review className={`${styles.mash}`} review={reviewAuthor} />
      <Results />
      {/* <div className={`${styles.mash2}`}>
        <Companies
          className='section-mb160 image-bw'
          title='Welcome to Our Expert Key Stack'
          items={expertStack}
        />
        <Description />
      </div> */}
    </Layout>
  );
};

export default CareersPage;
