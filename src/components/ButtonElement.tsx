import React from 'react';
import SmallLoader from '../common/SmallLoader';

type Props = {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isLoading?: boolean;
  onClick?: () => void;
};

const ButtonElement = ({ label, type, isLoading, onClick }: Props) => {
  return (
    <button
      className="flex w-full items-center justify-center rounded-lg bg-primary py-4 font-bold text-white"
      type={type}
      onClick={onClick}
    >
      {isLoading ? <SmallLoader color="border-white" /> : label}
    </button>
  );
};

export default ButtonElement;
