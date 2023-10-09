function RoundedInput({
  type = 'text',
  placeholder = '',
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  },
  classname = 'rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full',
}) {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={classname}
    />
  );
}

export default RoundedInput;
