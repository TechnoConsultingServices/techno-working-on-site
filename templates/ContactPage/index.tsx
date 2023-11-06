import Layout from "@/components/Layout";
import Main from "./Main";
import FormWrapper from "./FormWrapper";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutPage = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Layout emptyFooter>
            <Main />
            <FormWrapper />
        </Layout>
    );
};

export default AboutPage;
