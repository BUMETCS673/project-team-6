'use client';

type MaintenanceInputProps = {
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
type UnderlineTitleProps = {
  text?: string;
  children?: React.ReactNode;
  className?: string;
};
type MaintenanceItemProps = {
  label: string;
  date: string;
};

function MaintenanceItem({ label, date }: MaintenanceItemProps) {
  return (
    <p className="flex justify-between">
      {label}
      <span>{date}</span>
    </p>
  );
}

function MaintenanceInput({
  type = 'text',
  placeholder = 'placeholder',
  onChange,
}: MaintenanceInputProps) {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="rounded-xl font-normal border-2 border-gray-200 pl-2 text-2xs w-36"
    />
  );
}
MaintenanceInput.defaultProps = {
  type: 'text',
  placeholder: 'Enter value',
  onChange: () => {},
};

function UnderlineTitle({ text, children, className }: UnderlineTitleProps) {
  return (
    <u
      className={`flex flex-col items-center font-semibold text-2xl  ${
        className || ''
      }`}
    >
      {text}
      {children}
    </u>
  );
}
UnderlineTitle.defaultProps = {
  text: '',
  children: null,
  className: '',
};

export default function Maintenance() {
  return (
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 h-full w-full text-gray-400">
      <p className="mb-5 text-lg">
        Car ID#: <span>3005</span>
      </p>

      <div className="flex justify-between h-96 gap-10">
        <div className="flex flex-col w-1/2 ">
          <div className="flex justify-between font-semibold text-2xl">
            <UnderlineTitle text="Last Change" />
            <UnderlineTitle text="Date" />
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <MaintenanceItem label="Oil Change" date="10/15/2023" />
            <MaintenanceItem label="Tire Replacement" date="10/17/2023" />
          </div>
        </div>

        <div className="flex-col w-1/2">
          <form className="grid grid-cols-2 place-items-center gap-y-10">
            <UnderlineTitle text="Next Change" />
            <UnderlineTitle text="Scheduled" />
            <MaintenanceInput placeholder="Miles" />
            <MaintenanceInput placeholder="Date" />
            <MaintenanceInput placeholder="Miles" />
            <MaintenanceInput placeholder="Date" />

            <button
              type="submit"
              className="bg-orange-500 rounded-xl text-white font-bold py-2 px-4 col-start-2 ml-14"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
