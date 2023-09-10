import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

type Props = {
  name: string;
  status: string;
  broker: string;
  leadAssigned: string;
  propertyName: string;
  actionLabel: string;
  action?: () => void;
};

const LeadCard: React.FC<Props> = ({
  name,
  status,
  broker,
  leadAssigned,
  propertyName,
  actionLabel,
  action,
}) => {
  return (
    <div className="w-full my-4 bg-white dark:bg-boxdark p-4 rounded-lg flex items-start flex-col gap-3 shadow-2">
      <p className="dark:text-primary dark:hover:text-blue-800 font-bold text-primary hover:text-blue-800 cursor-pointer">
        {name}
        <span className="bg-warning/20 px-2 py-1 rounded-full font-bold text-[12px] text-warning ml-2">
          {status}
        </span>
      </p>
      <p>
        Broker :{' '}
        <span className="font-bold bg-white dark:bg-boxdark">{broker}</span>
      </p>
      <p>
        Lead assigned to<span className="ml-2 font-bold">{leadAssigned}</span>
      </p>
      <p className="px-4 py-2 bg-purple-300/20 bg-boxdark-2 w-max text-center rounded-full text dark:text-white text-black font-bold text-sm">
        {propertyName}
      </p>
      <button
        className={`px-6 py-2 w-35 rounded-md text-white flex items-center justify-center
        ${
          actionLabel === null &&
          'bg-slate-100 text-slate-700/50 dark:bg-black dark:text-white border-slate-300 border-[1px]'
        }
        ${actionLabel === 'approved' && 'bg-success dark:text-white'}
        ${actionLabel === 'reject' && 'bg-red-500 dark:text-white'}
        ${actionLabel === 'requested' && 'bg-warning dark:text-white'}
        ${actionLabel === 'No activity' && 'bg-warning dark:text-white'}
        `}
        onClick={() => action}
      >
        <FaRupeeSign />
        {actionLabel ? actionLabel : 'Null'}
      </button>
    </div>
  );
};

export default LeadCard;
