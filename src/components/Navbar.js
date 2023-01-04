import Input from './Input';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAside } from './asideSlice';

const Navbar = () => {
  // const Dispatch = useDispatch();
  // const { side } = useSelector((state) => state.aside);
  // const clickHandler = () =>{}

  return (
    <div className="flex justify-between items-center w-full top-0 p-5 bg-stone-700 shadow-2xl shadow-stone-700 hover:shadow-none duration-200  mb-6">
      <div className="flex items-center font-bold text-3xl text-cyan-500">
        <span className="pr-2 text-4xl">
          <ion-icon name="globe"></ion-icon>
        </span>
        <h1>Dashboard</h1>
      </div>
      <Input />
      <div className='text-white'>
        <ion-icon name="closed"></ion-icon>
      </div>
    </div>
  );
};

export default Navbar;
