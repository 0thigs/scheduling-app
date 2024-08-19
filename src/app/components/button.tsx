import React from "react";

type ButtonProps = {
    type: string
    id: string
    placeholder: string
    style: string
    onChange: () => void
}

const Button = ({type, id, placeholder, style, onChange, }: ButtonProps) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
    //   value={}
      onChange={() => onchange}
      className={style}
    //   className="w-full p-2 border border-gray-300 rounded"
      required
    />
  );
};

export default Button;
