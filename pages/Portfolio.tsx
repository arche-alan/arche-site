import React from "react";
import PageWrapper from "../src/components/PageWrapper";
import {NextPage} from "next";
import Image from 'next/image'
import advocatemockup from "../src/assets/advocatemockup.png"
import advocatepuzzle from "../src/assets/advocatepuzzle.png"

const Portfolio: NextPage = () => {

  return (
    <PageWrapper id={""} className={"portfolio-bg"}>
      <div className={"portfolio-wrapper"}>
        <div className={"portfolio-logo"}>
          <Image src={advocatepuzzle} alt={"logo"}/>
        </div>
        <div className={"portfolio-description"}>
          <p className={"marg-bot-1"}>
            {`Advocate IEP is the modern standard for monitoring student progress towards goals and IEPs.
              Advocate IEP meets teachers where they're at so it's not just another
              tool they're forced to use, it's an extension of how they're already working. With a modern technology stack,
              natural user experience, and simply useful features, Advocate IEP is one of Arche's proudest accomplishments.`}
          </p>
          <a href={"#"}>BUSINESS CASE (COMING SOON)</a>
        </div>

        <div className={"mockup"}>
          <Image src={advocatemockup} alt={"advocate mockup"}/>
        </div>

      </div>
    </PageWrapper>
  );
};
    
export default Portfolio;