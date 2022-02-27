import React from "react";
import Image from 'next/image'
import logo2 from "../assets/arche1.png"
import logo3 from "../assets/arche2.png"

const Header = ({isModalHeader = false, toggleModal}: {isModalHeader?: boolean, toggleModal: () => void}) => {
  
  return (
    <header className={"nav-header"}>
      <nav>
        <div>
          {
            isModalHeader ? (
              <span className={`modal-closed hi`}>HIRE US</span>
            ) : (
              <a className="hire-us" href={"#contactus"}>HIRE US</a>
            )
          }
        </div>
        <div className={"header-logo"}>
          <a className="line-height-0" href={"/"}>
            <Image src={logo3} alt={"Arche"}/>
          </a>
        </div>
        <div onClick={toggleModal} className={"menu-svg pointer"}>
          {
            isModalHeader ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="modal-icon"
                   viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fillRule="evenodd"
                      d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="modal-icon" viewBox="0 0 16 16">
                <path fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            )
          }
        </div>
      </nav>
    </header>
  );
};
    
export default Header;