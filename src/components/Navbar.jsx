import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setcategory } from '../store/storeSlices';

const Navbar = () => {


  const [input,setinput] = useState("")
  const dispatch = useDispatch();

  const searchbtn =()=>{
    dispatch(setcategory(input))
    setinput("")
  }
 X
  return (
   <div>
    <div className="navbar bg-yellow-300 text-black flex justify-between">
  <div className="flex-1">
  
    <Link to={"/"} className="btn btn-ghost text-2xl font-bold" >My_Tube </Link>
   

  </div>
  <div className=" flex ">
    <div className=" flex md:mr-[400px] text-black">
      <input  value={input} onChange={(e)=>setinput(e.target.value)} type="text" placeholder="Search" className=" outline-none px-4 py-2 rounded-lg border-none bordered w-24 md:w-auto bg-slate-100 text-black pr-[200px] " />
    <div className='hover:bg-slate-300 duration-300 ml-1 px-2 rounded-lg '>
    <IoSearchSharp onClick={searchbtn} size={"28px"} className='items-center flex justify-center text-center mt-2'/>
    </div>
      <div>
      </div>
    </div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
   </div>
  )
}

export default Navbar