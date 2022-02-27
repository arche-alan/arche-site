import React from "react";
import PageWrapper from "../src/components/PageWrapper";
import ContactForm from "../src/components/ContactForm";
import SectionInner from "../src/components/SectionInner";
import {NextPage} from "next";
    
const ContactUs: NextPage = () => {
  
  return (
    <PageWrapper id={"contactus"}>
      <SectionInner>
        <h2 className={"align-center marg-bot-2"}>CONTACT US</h2>

        <ContactForm/>
      </SectionInner>
    </PageWrapper>
  );
};
    
export default ContactUs;