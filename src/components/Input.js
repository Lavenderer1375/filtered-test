import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getEmployees } from './tableSlice';

const Input = () => {
  const [inp, setInp] = useState('');
  const Dispatch = useDispatch();

  const nameCather = async () => {
    await axios
      .get(`http://localhost:3001/employees/search/${inp}`)
      .then((res) => Dispatch(getEmployees(res.data)));
  };

  return (
    <div className='flex w-full mx-5'>
      <input
        className="rounded-md border-2 placeholder:text-black border-cyan-500 w-full mr-2 focus:bg-cyan-500 focus:border-none focus:text-white p-2 text-black duration-200"
        type="search"
        onChange={(event) => setInp(event.target.value)}
        value={inp}
        placeholder="Search..."
      />
      <span>
        <button
          onClick={() => nameCather()}
          className="p-2 rounded bg-stone-500 border-2 border-cyan-500 w-20 text-xl h-10 hover:bg-cyan-500 hover:text-white duration-200"
        >
          <ion-icon name="search"></ion-icon>
        </button>
      </span>
    </div>
  );
};

export default Input;
