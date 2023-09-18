import React, { useState } from 'react';

type Props = {
  label: string;
  onChange?: () => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputElement = ({ label, onChange }: Props) => {
  const [focused, setFocused] = useState<Boolean>(false);

  return (
    <div className="relative flex flex-col">
      <label
        htmlFor=""
        className={`absolute left-4 ${
          focused ? 'top-4' : 'top-[-12px]'
        } bg-white px-3 font-semibold
         dark:bg-transparent `}
      >
        {label}
      </label>
      <input
        onChange={(e) => {
          onChange(e);
        }}
        id=""
        name=""
        value=""
        onFocus={() => {
          setFocused(false);
        }}
        onBlur={() => {
          setFocused(true);
        }}
        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      />
    </div>
  );
};

export default InputElement;
