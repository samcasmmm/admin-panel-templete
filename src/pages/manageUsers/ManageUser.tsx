import Breadcrumb from '../../components/Breadcrumb';
import InputElement from '../../components/InputElement';
import { useState } from 'react';
import ButtonElement from './../../components/ButtonElement';
import { useGetListOfUsersQuery } from '../../app/features/manageUser/users.api';

// Define a TypeScript interface for the UserCard props
interface UserCardProps {
  user: User;
}

type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  reportingManager: string;
};

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
  const { data: ListOfUsers, isError } = useGetListOfUsersQuery({
    purpose: 'show',
  });

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

  // Define UserCard as a separate component
  const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const { name, email, phone, reportingManager } = user;
    return (
      <>
        <td className="m-3 py-2 text-center">{name || 'null'}</td>
        <td className="m-3 py-2 text-center">{email || 'null'}</td>
        <td className="m-3 py-2 text-center ">{phone || 'null'}</td>
        <td className="m-3 py-2 text-center">{reportingManager || 'null'}</td>
      </>
    );
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
            onChange={handleChange}
          />
          <InputElement
            label="Email"
            name="empEmail"
            type="email"
            value={inputData.empEmail}
            onChange={handleChange}
          />
          <InputElement
            label="Number"
            name="empNumber"
            type="number"
            value={inputData.empNumber}
            onChange={handleChange}
          />
          <ButtonElement
            label="Send OTP"
            onClick={handleClick}
            isLoading={isLoading}
          />
        </div>
        <div className="mt-8 w-full bg-white dark:bg-black">
          <table className="w-full table-auto">
            <thead>
              <tr className="border bg-blue-300">
                <th className="py-4">Name</th>
                <th className="py-4">Email</th>
                <th className="py-4">Phone</th>
                <th className="py-4">Reporting Manager</th>
              </tr>
            </thead>
            <tbody>
              {ListOfUsers?.data?.map((user: User, index: number) => (
                <tr
                  key={user.id}
                  className={
                    index % 2 === 0 ? 'bg-slate-200 dark:bg-slate-900' : ''
                  }
                >
                  <UserCard user={user} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
