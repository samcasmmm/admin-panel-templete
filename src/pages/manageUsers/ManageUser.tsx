import Breadcrumb from '../../components/Breadcrumb';
import InputElement from '../../components/InputElement';
import { useState } from 'react';
import ButtonElement from './../../components/ButtonElement';
import { useGetListOfUsersQuery } from '../../app/features/manageUser/users.api';
import { MdModeEditOutline } from 'react-icons/md';
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
    userName: '',
    userEmail: '',
    userNumber: '9823826356',
    userOTP: '',
    userUserType: '',
    userPermissions: '',
    userProperty: '',
    userReportingManager: '',
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
        <td className="text-left">{name || 'null'}</td>
        <td className="text-left">{email || 'null'}</td>
        <td className="text-left ">{phone || 'null'}</td>
        <td className="text-left">{reportingManager || 'null'}</td>
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
            name="userName"
            value={inputData.userName}
            onChange={handleChange}
          />
          <InputElement
            label="Email"
            name="userEmail"
            type="email"
            value={inputData.userEmail}
            onChange={handleChange}
          />
          <InputElement
            label="Number"
            name="userNumber"
            type="number"
            value={inputData.userNumber}
            onChange={handleChange}
          />
          <ButtonElement
            label="Send OTP"
            onClick={handleClick}
            isLoading={isLoading}
          />
          <InputElement
            label="Enter OTP"
            name="userOTP"
            type="number"
            value={inputData.userOTP}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="relative mt-3 overflow-x-auto rounded bg-white dark:bg-black">
        <p className="py-5 pl-6 font-bold">List Of Users</p>
        <table className="text-gray-500 dark:text-gray-400 w-full text-left text-sm">
          <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b text-xs uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Reporting Manager
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {ListOfUsers?.data?.map((user: User) => (
              <tr
                className="dark:bg-gray-800 dark:border-gray-700 bg-white dark:bg-slate-950"
                key={user.id}
              >
                <th
                  scope="row"
                  className="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                >
                  {user.name}
                </th>
                <td className="px-6 py-4">{user.reportingManager}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span>
                    <MdModeEditOutline />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUser;
