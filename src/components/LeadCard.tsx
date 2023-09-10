import React from 'react';

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
    <div className="w-full my-4 bg-white dark:bg-boxdark p-4 rounded-lg">
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
        Lead assigned to : <span>{leadAssigned}</span>
      </p>
      <p>{propertyName}</p>
      <button onClick={() => action}>{actionLabel}</button>
    </div>
  );
};

export default LeadCard;
