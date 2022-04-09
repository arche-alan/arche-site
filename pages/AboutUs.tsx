import React from "react";
import PageWrapper from "../src/components/PageWrapper";
import SectionInner from "../src/components/SectionInner";
import {NextPage} from "next";
    
const AboutUs: NextPage = () => {
  
  return (
    <PageWrapper id={"aboutus"}>
      <SectionInner>
        <h2 className={"align-center marg-bot-2"}>About Us</h2>

        <section className={"row"}>
          <div>
            <div className={"marg-bot-1"}>
              <p className={"marg-bot-1"}> Arche (pronounced arc) is a portmanteau of:</p>
              <p><strong>Arche: </strong>(/ˈɑrki/; ἀρχή; arkhé) <i>An Ancient Greek word meaning beginning, origin or source of action</i></p>
              <p><strong>Arc: </strong><i>A continuous progression or line of development</i></p>
            </div>
            <p className={"marg-bot-1"}>
              For us, code is our Arche- our source of action and progression towards solving current and future challenges.

              Based out of the greater Denver and Chicago areas, Arche is your dedicated software solutions team ready
              to merge your vision with code. Arche- Action and Progression.
            </p>
            <p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <a href={"#contactus"}>Let's talk about your ideas.</a>
            </p>
          </div>
        </section>
      </SectionInner>
    </PageWrapper>
  );
};
    
export default AboutUs;