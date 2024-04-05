import React from 'react';
import { MdOutlineLogout } from "react-icons/md";
import useLogOut from '../../hooks/useLogOut';


function LogoutButton() {
const {loading, logout}= useLogOut();
  return (
    <div className='mt-auto'>

      {!loading ? (
        <MdOutlineLogout className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
      ):(
        <span className='loading loading-spinner'></span>
      )}
      
    </div>
  )
}

export default LogoutButton