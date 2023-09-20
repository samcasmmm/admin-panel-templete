import Breadcrumb from '../../components/Breadcrumb';
import InputElement from '../../components/InputElement';
import { useState } from 'react';
import ButtonElement from './../../components/ButtonElement';

const ManageUser = () => {
  const [inputData, setInputData] = useState({
    empName: '',
    empEmail: '',
    empNumber: '9823826356',
    empOTP: '',
    empUserType: '',
    empPermissions: '',
    empProperty: '',
    empReportingManager: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log('click');
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <Breadcrumb pageName="ManageUser" altPageName="Manage User" />
      <div className="min-h-[100px] rounded-md bg-white dark:bg-black">
        <p className="p-3 font-bold">Add Users</p>
        <div className="my-2 border-b-[1px] border-b-slate-300 dark:border-b-boxdark" />
        <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 md:grid-cols-4">
          <InputElement
            label="Name"
            type="text"
            name="empName"
            value={inputData.empName}
            onChange={(e) => handleChange(e)}
          />
          <InputElement
            label="Email"
            name="empEmail"
            type="email"
            value={inputData.empEmail}
            onChange={(e) => handleChange(e)}
          />
          <InputElement
            label="Number"
            name="empNumber"
            type="number"
            value={inputData.empEmail}
            onChange={(e) => handleChange(e)}
          />
          <ButtonElement
            label="Send OTP"
            onClick={handleClick}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
};

export default ManageUser;
