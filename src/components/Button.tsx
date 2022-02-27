import React from "react";

const Button = ({text, onClick, isLoading}: {text: string, onClick: () => void, isLoading?: boolean}) => {
  return (
    <button className={"pointer"} onClick={onClick} disabled={isLoading}>{text}</button>
  );
};
    
export default Button;