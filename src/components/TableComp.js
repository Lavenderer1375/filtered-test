import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from './tableSlice';
import Navbar from './Navbar';
import axios from 'axios';

const TableComp = () => {
  const Dispatch = useDispatch();
  const { employee } = useSelector((state) => state.table);
  const getData = async () => {
    await axios
      .get('http://localhost:3001/employees/all')
      .then((res) => Dispatch(getEmployees(res.data.employees)));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="md:flex-col text-sm w-screen">
      <Navbar data-testid="nav" />
      <div className="flex-col">
        <h1 className="py-5 px-2 font-bold text-4xl">Data Tables</h1>
        <div className="px-5">
          <p>DataTable with minimal features & hover style.</p>
        </div>
      </div>
      <div>
        <table className="w-full my-10 bg-stone-200">
          <tr className="bg-cyan-500 text-stone-900 text-lg">
            <th className="px-10 border-b-2 py-5 justify-start items-start hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200">
              Employees ID
            </th>
            <th className="px-10 border-b-2 py-5 justify-start items-start hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200">
              Name
            </th>
            <th className="px-10 border-b-2 py-5 hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200">
              Email
            </th>
            <th className="px-10 border-b-2 py-5 hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200">
              Username
            </th>
            <th className="px-10 border-b-2 py-5 hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200">
              Role
            </th>
          </tr>
          {employee.length > 0 ? (
            employee?.map((item, index) => (
              <tr key={index} className="text-lg">
                <td className="px-10 border-b-2 py-5 hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200 text-center">
                  {item.id}
                </td>
                <td className="px-10 border-b-2 py-5 hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200 text-center">
                  {item.name}
                </td>
                <td className="px-10 border-b-2 py-5 hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200 text-center">
                  {item.email}
                </td>
                <td className="px-10 border-b-2 py-5 hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200 text-center">
                  {item.username}
                </td>
                <td className="px-10 border-b-2 py-5 hover:bg-stone-700 hover:text-cyan-400 ease-in duration-200 text-center">
                  {item.role}
                </td>
              </tr>
            ))
          ) : (
            <p>Employee not found.</p>
          )}
        </table>
      </div>
    </div>
  );
};

export default TableComp;
