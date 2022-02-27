import React from "react";
import PageWrapper from "../src/components/PageWrapper";
import SectionInner from "../src/components/SectionInner";
import {NextPage} from "next";
    
const Services: NextPage = () => {
  
  return (
    <PageWrapper id={"services"}>
      <SectionInner>
        <h2 className={"align-center marg-bot-2"}>SERVICES</h2>

        <section className={"row"}>
          <div className={"column marg-right-2 text-center"}>
            <p className={"marg-bot-1"}>Web Applications</p>
            <p className={"marg-bot-1"}>Static Web Sites</p>
            <p className={"marg-bot-1"}>Internet of Things (IOT)</p>
            <p className={"marg-bot-1"}>eCommerce</p>
            <p className={"marg-bot-1"}>Proof of Concepts</p>
          </div>
          <div className={"column text-center"}>
            <p className={"marg-bot-1"}>Mobile Applications</p>
            <p className={"marg-bot-1"}>Integrations & Extensions</p>
            <p className={"marg-bot-1"}>APIs</p>
            <p className={"marg-bot-1"}>Dashboards</p>
            <p className={"marg-bot-1"}>Web3</p>
          </div>
        </section>
      </SectionInner>
    </PageWrapper>
  );
};
    
export default Services;