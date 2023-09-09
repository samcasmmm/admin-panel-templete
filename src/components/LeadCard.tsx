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
    <div>
      <p>
        {name} <span>{status}</span>
      </p>
      <p>
        Broker : <span>{broker}</span>
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
