import React from 'react';

type Props = {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

const ButtonElement = ({ label, type, onClick }: Props) => {
  return (
    <button
      className="w-full rounded-lg bg-primary py-4 font-bold text-white"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonElement;
