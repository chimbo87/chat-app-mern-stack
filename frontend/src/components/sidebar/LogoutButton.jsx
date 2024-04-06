import React from 'react';
import { MdOutlineLogout } from "react-icons/md";
import useLogOut from '../../hooks/useLogOut';


function LogoutButton() {
const {loading, logout}= useLogOut();
  return (
    <div className='mt-auto'>

      {!loading ? (
        <MdOutlineLogout className='w-6 h-6 text-sky-500 cursor-pointer mt-5' onClick={logout}/>
      ):(
        <span className='loading loading-spinner'></span>
      )}
      
    </div>
  )
}

export default LogoutButton