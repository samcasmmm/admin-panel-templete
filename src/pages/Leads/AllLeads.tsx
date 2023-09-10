import Breadcrumb from '../../components/Breadcrumb';
import LeadCard from '../../components/LeadCard';

// type Props = {};

const sampleData = [
  {
    name: 'John Doe',
    status: 'new',
    broker: 'Broker A',
    leadAssigned: 'Lead A',
    propertyName: 'Property X',
    actionLabel: 'reject',
    action: () => {
      // Implement your action logic here
      console.log('Edit clicked');
    },
  },
  {
    name: 'Jane Smith',
    status: 'new',
    broker: 'Broker B',
    leadAssigned: 'Lead B',
    propertyName: 'Property Y',
    actionLabel: 'requested',
    action: () => {
      // Implement your action logic here
      console.log('Delete clicked');
    },
  },
  // Add more objects as needed
];

const AllLeads = () => {
  return (
    <>
      <Breadcrumb altPageName="Manage Leads" pageName="All Leads" />
      <div className="">
        {sampleData.map((lead, index) => (
          <LeadCard
            name={lead.name}
            status={lead.status}
            broker={lead.broker}
            leadAssigned={lead.leadAssigned}
            propertyName={lead.propertyName}
            actionLabel={lead.actionLabel}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default AllLeads;
