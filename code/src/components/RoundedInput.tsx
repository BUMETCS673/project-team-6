import React, { ChangeEvent } from 'react';

interface RoundedInputProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RoundedInput: React.FC<RoundedInputProps> = ({ type,placeholder, onChange }) => {


  return (
    <div className="w-[308px] h-[45px] bg-white rounded-[10px] border-2 border-solid border-[#cbcedb] flex justify-center items-center">
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="rounded-xl font-normal  py-2 pl-2 text-2xs w-full"
      />
    </div>
  );
}

export default RoundedInput;
