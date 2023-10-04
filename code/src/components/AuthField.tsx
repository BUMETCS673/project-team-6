export default function AuthField({ children, type, onChangeValue, ...props }) {
  return (
    <div>
      <p className="font-bold">{children}</p>
      <input
        placeholder={children}
        onChange={(e) => onChangeValue(e.target.value)}
        type={type}
        className="rounded-xl border border-gray-500 py-1 pl-2 w-full"
        {...props}
      />
    </div>
  );
}
