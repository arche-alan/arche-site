import React from "react";
    
const SectionInner = ({children, className=""}) => {
  
  return (
    <section className={`section-inner${className && ` ${className}`}`}>
      {children}
    </section>
  );
};
    
export default SectionInner;