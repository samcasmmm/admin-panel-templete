import Breadcrumb from '../../components/Breadcrumb';
import InputElement from '../../components/InputElement';
import { useState } from 'react';

const ManageUser = () => {
  const [inputData, setInputData] = useState({
    empName: '',
    empEmail: '',
    empNumber: '',
    empOTP: '',
    empUserType: '',
    empPermissions: '',
    empProperty: '',
    empReportingManager: '',
  });
  const handleChange = (e) => {};
  return (
    <>
      <Breadcrumb pageName="ManageUser" altPageName="Manage User" />
      <div className="min-h-[100px] rounded-md bg-white dark:bg-black">
        <p className="p-3 font-bold">Add Users</p>
        <div className="my-2 border-b-[1px] border-b-slate-300 dark:border-b-boxdark" />
        <div className="p-3">
          <InputElement label="Name" onChange={(e) => handleChange(e)} />
        </div>
      </div>
    </>
  );
};

export default ManageUser;
