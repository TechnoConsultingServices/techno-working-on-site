import cn from "classnames";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Preview from "@/components/Preview";
import Plans from "./Plans";
import Gallery from "@/components/Gallery";
import Description from "./Description";
import Companies from "@/components/Companies";
import Projects from "@/components/Projects";

import { companiesLight } from "@/mocks/companies";
import { projects } from "@/mocks/projects";

import styles from "./ServicePage.module.sass";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { services } from "@/mocks/services";

const gallery = [
  { image: "/images/photo-4.jpg" },
  { image: "/images/photo-5.jpg" },
];

const ServicePage = ({ id }: any) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const service = services.find((service) => service.id === id);

  return (
    <Layout>
      <Main service={service} />
      <Details service={service} />
      {service?.previewImage && <Preview className='section-mb120' image={service?.previewImage} /> }
      {service?.previewVideo && <Preview className='section-mb120' video={service?.previewVideo} /> }
      <Plans service={service} />
      <div
        className={cn("section-black", styles.section, styles.mash)}>
        {/* <Gallery images={service?.gallery?.images || []} /> */}
        {service?.gallery?.previewImage && (
          <Preview
            image={service?.gallery?.previewImage}
          />
        )}
        {service?.gallery?.previewVideo && (
          <Preview
            video={service?.gallery?.previewVideo}
          />
        )}
        <Description galleryDescription={service?.gallery} />
      </div>
      {/*<div className={cn("section-pd", styles.mash2)}>
        <Companies
          className='align-start image-bw'
          title={service?.compaines?.title}
          items={service?.compaines?.items || []}
        />
         <Projects
                    title={service?.projects?.title}
                    label="STORIES"
                    items={service?.projects?.items || []}
                    viewItem={service?.projects?.itemCount}
                    viewAll="VIEW MORE PROJECT"
                />
      </div> */}
    </Layout>
  );
};

export default ServicePage;
