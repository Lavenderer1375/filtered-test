import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sideHidden } from './tableSlice';



const Navbar = () => {
  const Dispatch = useDispatch()
  const sideHidden = useSelector((state) => state.table)




  return (
    <div className='flex items-center'>
        <div className='flex items-center font-semibold text-2xl'>
          <span>
            <ion-icon name="globe"></ion-icon>
          </span>
          <h1>Dashboard</h1>
        </div>
        <div>
        <ion-icon name="closed"></ion-icon>
        </div>
    </div>
  );
};

export default Navbar;
