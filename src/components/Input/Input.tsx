import React from 'react';
import './style.scss';

// Type
type TypeInput = {
  type: string,
  title: string,
  htmlFor: string,
  size: number,
  ariaRequired: boolean,
  placeholder: string
}

const Input = ({
  type, title, ariaRequired, placeholder, htmlFor, size,
}: TypeInput) => (
  <div className="Input">
    <label
      htmlFor={htmlFor}
    >
      {title}
    </label>
    <input
      type={type}
      aria-required={ariaRequired}
      placeholder={placeholder}
      id={htmlFor}
      size={size}
    />
  </div>
);

export default Input;
