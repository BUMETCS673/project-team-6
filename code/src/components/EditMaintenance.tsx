'use client';

interface MaintenanceInputProps  {
  text?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function MaintenanceInput({
  text = 'label',
  type = 'text',
  placeholder = 'placeholder',
  onChange,
}: MaintenanceInputProps) {
  return (
    <div className="flex justify-between text-md">
      {text}
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="rounded-xl font-normal border-2 border-gray-200 pl-2 text-2xs w-36"
      />
    </div>
  );
}
MaintenanceInput.defaultProps = {
  text: 'label',
  type: 'text',
  placeholder: 'Enter value',
  onChange: () => {},
};

export default function Maintenance() {
  return (
    <div className="bg-white rounded-3xl border border-1 shadow-lg shadow-gray-300 py-5 px-10 h-full w-full text-gray-400">
      <div className="mb-5  pb-5 text-lg border-b-2 border-gray-400">
        <p>
          Car&nbsp;ID#:&nbsp;<span>3005</span>
        </p>
        <p>
          Current&nbsp;Mileage&nbsp;:&nbsp;<span>5500</span> <span>mi</span>
        </p>
      </div>

      <form className="flex flex-col gap-y-5">
        <MaintenanceInput
          text="Last Oil Change Mileage"
          placeholder="Miles"
          type="number"
        />
        <MaintenanceInput
          text="Last Tire Change Mileage"
          placeholder="Miles"
          type="number"
        />
        <MaintenanceInput
          text="Last Oil Change Date"
          placeholder="Date"
          type="date"
        />

        <MaintenanceInput
          text="Last Tire Change Date"
          placeholder="Date"
          type="date"
        />

        <MaintenanceInput
          text="Next Oil Change Date"
          placeholder="Date"
          type="date"
        />
        <MaintenanceInput
          text="Next Tire Change Date"
          placeholder="Date"
          type="date"
        />
        <button
          type="submit"
          className="bg-orange-500 rounded-xl text-white font-bold py-2 px-4 w-1/3 self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
