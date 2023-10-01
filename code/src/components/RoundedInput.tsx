import React, { ChangeEvent } from 'react';

interface RoundedInputProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RoundedInput: React.FC<RoundedInputProps> = ({ type,placeholder, onChange }) => {


  return (

      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="rounded-xl font-normal border border-gray-500 py-2 pl-2 text-2xs w-full"
      />
 
  );
}

export default RoundedInput;
