import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useEffect, useState } from 'react';
// import Drower fr om '../Shared/drower/Drower';
import './Main.css'
const Main = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>

      {
        loading ? (
<>
<div className=' flex justify-center my-52'>

<p className='loader'></p>
</div>

</>
        ) : (
          <>
          
          <Navbar></Navbar>
      <Outlet></Outlet>
          </>
        )
      }
      
      {/* <Drower></Drower> */}
    </div>
  );
};

export default Main;