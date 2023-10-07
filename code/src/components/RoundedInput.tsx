function RoundedInput({
  type,
  placeholder,
  onChange,
  classname,
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

RoundedInput.defaultProps = {
  type: 'text',
  placeholder: '',
  onChange: () => {},
  classname: 'rounded-xl font-normal border-2 border-gray-200 py-2 px-2 text-2xs w-full',
}


export default RoundedInput;
