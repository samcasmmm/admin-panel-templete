import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import LeadCard from '../../components/LeadCard';
import axios from 'axios';
import Cookies from 'js-cookie';
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

interface Lead {
  name: string;
  status: string;
  broker: string;
  leadAssigned: string;
  working_employee: string;
  rewardStatus: string;
}

const AllLeads = () => {
  const [leadsData, setLeadsData] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState({
    prev: false,
    next: false,
  });

  let LEADS_URL = `/v2/admin/get/leads?type=&property_id=&employee_id=&start_date=&end_date=&source=&bhk_type_id&keyword=&pageNo=${pageNo}&pageSize=20&sortBy=id&sortDir=desc`;

  let lead_url1 = `/v2/admin/get/leads?type=all&pageNo=${pageNo}&pageSize=100`;

  useEffect(() => {
    const getLeadData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(lead_url1, {
          headers: {
            Authorization: `Bearer ${Cookies.get('bearer_token')}`,
          },
        });
        console.log(response.data);
        setLeadsData(response.data.data);
        setTotalPages(response.data.data.length);
      } catch (error) {
        // toast.error('Failed to Fetch Leads');
        console.log(error);
      }
      setLoading(false);
    };
    getLeadData();
  }, [pageNo]);
  return (
    <>
      <Breadcrumb altPageName="Manage Leads" pageName="All Leads" />
      <div className="">
        <button
          onClick={() => {
            setPageNo(pageNo + 1);
          }}
        >
          click
        </button>
        {leadsData?.map((lead: Lead, index: number) => (
          <LeadCard
            name={lead.name}
            status={lead.status}
            broker={lead.broker}
            leadAssigned={lead.leadAssigned}
            propertyName={lead.working_employee}
            actionLabel={lead.rewardStatus}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default AllLeads;
