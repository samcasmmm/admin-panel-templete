import React, { useState } from 'react';

type Props = {
  label: string;
  name?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputElement = ({
  label,
  name,
  value,
  type,
  disabled,
  onChange,
}: Props) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className="relative flex w-[100%] flex-col">
      <label
        htmlFor={`input-${name}`}
        className={`absolute left-4 ${
          focused ? 'top-4' : 'translate-y-[-12px]'
        } bg-white px-3 font-semibold transition duration-100 ease-linear
         dark:bg-transparent`}
      >
        {label}
      </label>
      <input
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
        id={`input-${name}`}
        type={type || 'text'}
        name={name}
        value={value}
        disabled={disabled || false}
        onFocus={() => {
          setFocused(false);
        }}
        onBlur={() => {
          if (!value) {
            setFocused(true);
          }
        }}
        className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-4 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary disabled:dark:bg-slate-900"
      />
    </div>
  );
};

export default InputElement;
