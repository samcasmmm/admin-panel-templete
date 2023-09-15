import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import LeadCard from '../../components/LeadCard';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAllLeadsQuery } from '../../app/features/leads/leads.api';

interface Lead {
  name: string;
  status: string;
  broker: string;
  property_name: string;
  working_employee: string;
  rewardStatus: string;
}

const AllLeads = () => {
  const {
    data: leadsData,
    isLoading,
    isFetching,
  } = useAllLeadsQuery({ pageNo: 1, pageSize: 100 });
  console.log(leadsData, isLoading, isFetching);

  return (
    <>
      <Breadcrumb altPageName="Manage Leads" pageName="All Leads" />
      <div className="">
        {leadsData?.length > 0 ? (
          leadsData?.map((lead: Lead, index: number) => (
            <LeadCard
              name={lead.name}
              status={lead.status}
              broker={lead.broker}
              leadAssigned={lead.working_employee}
              propertyName={lead.property_name}
              actionLabel={lead.rewardStatus}
              key={index}
            />
          ))
        ) : (
          <div className="flex items-center justify-center md:min-h-[600px] min-h-[400px]">
            <p>No Data Availble</p>
          </div>
        )}
      </div>
    </>
  );
};
export default AllLeads;
