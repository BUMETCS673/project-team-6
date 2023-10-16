function RoundedInput({
  defaultValue,
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
      placeholder={placeholder.toString()}
      className={classname}
      defaultValue={defaultValue}
    />
  );
}

RoundedInput.defaultProps = {
  type: 'text',
  placeholder: '',
  onChange: () => {},
  classname:
    'rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full',
};

export default RoundedInput;
