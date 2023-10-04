import React, { ChangeEvent } from 'react';

interface RoundedInputProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function RoundedInput({ type, placeholder, onChange }: RoundedInputProps) {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="rounded-xl font-normal border-2 border-gray-200 py-2 pl-2 text-2xs w-full"
    />
  );
}

export default RoundedInput;
