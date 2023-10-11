import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type Props = {
  label?: string;
  name?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data?: [
    {
      id: number;
      name: string | any;
      imageUrl: string | any;
      guaranteeForSale: string | any;
    },
  ];
};

const SelectDropdown = (props: Props) => {
  const [inputData, setInputData] = useState('');
  return (
    <div className="h-80 w-full font-medium">
      <div className="flex w-full items-center justify-between rounded-lg border border-stroke bg-white p-4 dark:border-form-strokedark dark:bg-form-input">
        {`Select ${props.label}`}
        <ChevronDown />
      </div>
      <ul className="scrollbar-track-gray-200 mt-2 max-h-50 overflow-y-auto rounded-md border border-stroke bg-white  scrollbar-thin scrollbar-none dark:border-form-strokedark  dark:bg-form-input">
        {props.data?.map((item) => (
          <li
            className="p-2 pl-3 text-sm hover:bg-sky-600 hover:text-white"
            onClick={() => setInputData(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectDropdown;
