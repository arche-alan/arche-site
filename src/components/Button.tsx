import React from "react";
import ArcheSymbol from "./ArcheSymbol";

const Button = ({text, type = "button", onClick, isLoading}: {text: string, type?: string, onClick?: () => void, isLoading?: boolean}) => {
  return (
    // @ts-ignore
    <button type={type} className={"icon-btn pointer"} onClick={onClick} disabled={isLoading}>
      {isLoading && <div className={"rotating"}><ArcheSymbol/></div>}
      <span className={isLoading ? "i-left" : ""}>{text}</span>
    </button>
  );
};
    
export default Button;