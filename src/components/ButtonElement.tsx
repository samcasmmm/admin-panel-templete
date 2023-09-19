import React from 'react';

type Props = {
  label: string;
  type?: string;
};

const ButtonElement = ({ label, type }: Props) => {
  return (
    <button className="w-full rounded-lg bg-primary py-4 font-bold text-white">
      {label}
    </button>
  );
};

export default ButtonElement;
