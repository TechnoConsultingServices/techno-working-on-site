import Layout from "@/components/Layout";
import Main from "./Main";
import Description from "./Description";
import Services from "./Services";
import Projects from "@/components/Projects";

import { services } from "@/mocks/services";
import { projects } from "@/mocks/projects";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicesPage = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Layout>
            <Main />
            {/* <Description /> */}
            <Services items={services} />
            <Projects
                className="section-pd"
                title="Take a look at our most successful projects"
                label="OUR PROJECTS"
                items={projects}
                viewItem={4}
                // viewAll="VIEW ALL PROJECT"
                dark
            />
        </Layout>
    );
};

export default ServicesPage;
