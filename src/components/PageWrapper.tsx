import React from "react";
    
const PageWrapper = ({children, id="", className=""}: {children: React.ReactNode, id?: string, className?: string}) => {
  
  return (
    <section id={id} className={`page-wrapper${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
};
    
export default PageWrapper;