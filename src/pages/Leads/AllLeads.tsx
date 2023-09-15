import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import LeadCard from '../../components/LeadCard';
import axios from 'axios';
import Cookies from 'js-cookie';

interface Lead {
  name: string;
  status: string;
  broker: string;
  property_name: string;
  working_employee: string;
  rewardStatus: string;
}

const AllLeads = () => {
  const [leadsData, setLeadsData] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  let LEADS_URL = `/v2/admin/get/leads?type=&property_id=&employee_id=&start_date=&end_date=&source=&bhk_type_id&keyword=&pageNo=${pageNo}&pageSize=20&sortBy=id&sortDir=desc`;

  let lead_url1 = `/v2/admin/get/leads?type=all&pageNo=${pageNo}&pageSize=100`;


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
        {leadsData.length > 0 ? (
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
