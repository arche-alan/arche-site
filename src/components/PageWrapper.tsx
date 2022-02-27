import React from "react";
    
const PageWrapper = ({children, id="", className=""}) => {
  
  return (
    <section id={id} className={`page-wrapper${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
};
    
export default PageWrapper;