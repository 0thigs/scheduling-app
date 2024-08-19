import React from "react";

type InputProps = {
    type: string
    id: string
    placeholder: string
    value: string
    classname: string
    onChange: (e: any) => void
}

const Input = ({type, id, placeholder, value, classname, onChange, }: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classname}
      required
    />
  );
};

export default Input;
