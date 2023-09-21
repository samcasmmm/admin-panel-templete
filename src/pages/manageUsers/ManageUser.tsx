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
      <tr className="m-2">
        <td className="text-center">{name || 'null'}</td>
        <td className="text-center">{email || 'null'}</td>
        <td className="text-center">{phone || 'null'}</td>
        <td className="text-center">{reportingManager || 'null'}</td>
      </tr>
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
        <div className="w-full bg-white dark:bg-black">
          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Reporting Manager</th>
              </tr>
            </thead>
            <tbody>
              {ListOfUsers?.data?.map((user: User, index: number) => (
                <UserCard user={user} key={user.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUser;
