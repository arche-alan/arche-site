import React from "react";
import ArcheSymbol from "./ArcheSymbol";

const Button = ({text, onClick, isLoading}: {text: string, onClick: () => void, isLoading?: boolean}) => {
  return (
    <button className={"icon-btn pointer"} onClick={onClick} disabled={isLoading}>
      {isLoading && <div className={"rotating"}><ArcheSymbol/></div>}
      <span className={isLoading ? "i-left" : ""}>{text}</span>
    </button>
  );
};
    
export default Button;