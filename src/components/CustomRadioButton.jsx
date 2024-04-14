import React from 'react';

const CustomRadioButton = ({ id, name, label, value, checked, onChange }) => {
  return (
    <div className={`inline-block ${checked ? 'bg-[#0000FF] border-[#0000FF] text-white' : 'bg-transparent text-black border border-black'} rounded-full overflow-hidden focus:outline-none`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
        required
      />
      <label htmlFor={id} className="cursor-pointer block px-4 py-2">
        {label}
      </label>
    </div>
  );
};

export default CustomRadioButton;
