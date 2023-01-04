import React from 'react';
import Pic from '../assets/photo-1507003211169-0a1dd7228f2d.avif';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from './tableSlice';

const Aside = () => {
  const [inp, setInp] = useState('');
  const Dispatch = useDispatch();

  const nameCather = async () => {
    await axios
      .get(`http://localhost:3001/employees/search/${inp}`)
      .then((res) => Dispatch(getEmployees(res.data)));
  };

  return (
    <div className="flex-col font-normal md:w-1/6 w-1/3 h-screen p-3 md:mr- justify-start bg-stone-700 border-cyan-500 text-white border-r-4">
      <div className="flex-col pb-0 text-white rounded-t-lg mb-2">
        <h1 className="flex border-b-2 border-cyan-500 w-full pt-0 py-2 mb-2 font-bold text-xl">
          AdminLTE 3
        </h1>
        <div className="border-b-2 border-cyan-500 flex mb-5 w-full py-5 items-center">
          <span>
            <img
              className="w-12 h-12 mr-2 overflow-hidden rounded-full shadow-md shadow-stone-400"
              src={Pic}
              alt="profile"
            />
          </span>
          <h1 className="font-semibold text-lg">Alexander Pierce</h1>
        </div>
      </div>
      <div className="flex-row justify-start items-center">
        <input
          className="rounded-md border-2 placeholder:text-black border-cyan-500 mr-1 w-4/5 focus:bg-cyan-500 focus:border-none focus:text-white p-2 text-black duration-200"
          type="search"
          onChange={(event) => setInp(event.target.value)}
          value={inp}
          placeholder="Search..."
        />
        <span>
          <button
            onClick={() => nameCather()}
            className="rounded bg-stone-500 border-2 border-cyan-500 w-10 h-10 hover:bg-cyan-500 hover:text-white duration-200"
          >
            <ion-icon name="search"></ion-icon>
          </button>
        </span>
        <div className="flex my-5">
          <ul>
            <li className="flex">
              <span className="text-2xl pr-2">
                <ion-icon name="aperture"></ion-icon>
              </span>
              Dashboard
            </li>
            <li className="flex">
              <span className="text-2xl pr-2">
                <ion-icon name="wine"></ion-icon>
              </span>
              Widgets
            </li>
            <li className="flex">
              <span className="text-2xl pr-2">
                <ion-icon name="layers"></ion-icon>
              </span>
              Layout options
            </li>
            <li className="flex">
              <span className="text-2xl pr-2">
                <ion-icon name="pie-chart"></ion-icon>
              </span>
              Charts
            </li>
            <li className="flex">
              <span className="text-2xl pr-2">
                <ion-icon name="tv"></ion-icon>
              </span>
              UI Elements
            </li>
            <li className="flex">
              <span className="text-2xl pr-2">
                <ion-icon name="albums"></ion-icon>
              </span>
              Forms
            </li>
            <li className="relative w-full ">
              <select className="w-full p-2 focus:border-none border-none text-white bg-stone-700 shadow-sm focus:border-indigo-600">
                <option>Data Tables</option>
                <option>Simple Tables</option>
                <option>jsGrid</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aside;
