import React from "react";
import Header from "./Header";
import PageWrapper from "./PageWrapper";

const NavModal = ({open = false, closeModal = () => {}}) => {
  
  return (
    <section className={`modal ${open ? "modal-open" : "modal-closed"}`}>
      {/*<Header toggleModal={closeModal} isModalHeader/>*/}
      <PageWrapper id={"modal"}>
        <div className={"column"}>
          <nav>
            <ul>
              <li><a href={"#portfolio"} onClick={closeModal}>PORTFOLIO</a></li>
              <li><a href={"#aboutus"} onClick={closeModal}>ABOUT US</a></li>
              <li><a href={"#services"} onClick={closeModal}>SERVICES</a></li>
              <li><a href={"#contactus"} onClick={closeModal}>CONTACT US</a></li>
            </ul>
          </nav>
        </div>
      </PageWrapper>
    </section>
  );
};
    
export default NavModal;