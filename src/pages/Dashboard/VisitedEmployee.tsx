import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { FaAngleDown } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { usePartnerMappedDataQuery } from '../../app/features/dashboard/visited.api';
import { timestampToCustomFormat } from './../../utils/TimeConversion';
import SmallLoader from '../../common/SmallLoader';

interface IDropdown {
  label: string;
  data: IEmployeeData[];
  isFetching?: boolean;
}

interface IfilteredDataState {
  today: IEmployeeData[];
  yesterday: IEmployeeData[];
  previous: IEmployeeData[];
}

interface IEmployeeData {
  empId: number;
  empName: string;
  id: number;
  partnerId: number;
  partnerName: string | null;
  timestamp: number;
}

const VisitedEmployee = () => {
  const [filteredData, setFilteredData] = useState<IfilteredDataState>({
    today: [],
    yesterday: [],
    previous: [],
  });

  const { data: partnerMappedData, isFetching } = usePartnerMappedDataQuery({});

  const isSameDay = (date1: any, date2: any) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const filterDataByDate = (data: []) => {
    const today: IEmployeeData[] = [];
    const yesterday: IEmployeeData[] = [];
    const previous: IEmployeeData[] = [];
    const currentDate = new Date();

    data?.forEach((item: IEmployeeData) => {
      const itemDate = new Date(item?.timestamp);
      if (isSameDay(currentDate, itemDate)) {
        today.push(item);
      } else if (
        isSameDay(
          currentDate,
          new Date(itemDate.setDate(currentDate.getDate() - 1)),
        )
      ) {
        if (item) {
          yesterday.push(item);
        }
      } else {
        if (item) {
          previous.push(item);
        }
      }
    });

    setFilteredData({ today, yesterday, previous });
  };

  useEffect(() => {
    !isFetching && filterDataByDate(partnerMappedData?.data);
  }, [isFetching]);

  return (
    <>
      <Breadcrumb
        pageName="Visited Employee"
        altPageName="All Visited Employees"
      />
      <DropDown
        label="Today"
        data={filteredData.today}
        isFetching={isFetching}
      />
      <DropDown
        label="Yesterday"
        data={filteredData.yesterday}
        isFetching={isFetching}
      />
      <DropDown
        label="Previous"
        data={filteredData.previous}
        isFetching={isFetching}
      />
    </>
  );
};

export default VisitedEmployee;

const DropDown: React.FC<IDropdown> = ({ label, data, isFetching }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const renderData = () => {
    if (isFetching) {
      return <SmallLoader color="border-primary" />;
    } else if (data && data.length > 0) {
      return data.map((item, index) => <MeetingItem key={index} item={item} />);
    } else {
      return <DataNoAvailable />;
    }
  };

  return (
    <div className="my-4 w-full cursor-pointer">
      <div className="flex w-full items-center gap-2" onClick={toggleOpen}>
        <FaAngleDown />
        <p className="font-bold">{label} Meeting</p>
      </div>
      <div
        className={`w-full bg-white dark:bg-boxdark ${
          open ? 'h-auto' : 'hidden h-0'
        } mt-2 flex flex-col gap-2 overflow-hidden rounded-md p-4 transition duration-300 ease-in-out`}
      >
        {renderData()}
      </div>
    </div>
  );
};

const MeetingItem: React.FC<{ item: any }> = ({ item }) => (
  <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
    <p className="">
      Meeting has successfully done between{' '}
      <span className="font-bold  dark:text-white">{item.empName}</span> and
      Channel partner{' '}
      <span className="ml-2 cursor-pointer font-bold text-rose-400 transition duration-300 ease-in-out hover:text-rose-600">
        {item.partnerName || 'Confidential'}
      </span>
    </p>
    <p className="flex flex-row items-center justify-center gap-2">
      <SlCalender />
      {timestampToCustomFormat(item.timestamp)}
    </p>
  </div>
);

const DataNoAvailable = () => {
  return (
    <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="">
        No Meeting data available
        <span className="ml-2 cursor-pointer font-bold text-rose-600"></span>
      </p>
      <p className="flex flex-row items-center justify-center gap-2">
        <SlCalender />
        {'00:00:00  00/00/0000'}
      </p>
    </div>
  );
};
