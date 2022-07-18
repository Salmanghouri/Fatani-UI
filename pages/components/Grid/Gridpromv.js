import React from 'react'
import {  GiSpookyHouse, GiHouse } from 'react-icons/gi';
import { BiBuildingHouse  } from 'react-icons/bi';
import { MdHouse ,MdHouseSiding, MdBedroomParent, MdOutlineOtherHouses } from 'react-icons/md';
import {  BsFillHouseDoorFill, BsBuilding } from 'react-icons/bs';
import {  FaBuilding, FaHotel } from 'react-icons/fa';
import {  TbDotsCircleHorizontal } from 'react-icons/tb';


const Gridpromv = () => {
  return (
  <>
  <div className="grid grid-cols-4 gap-2 px-1 py-1 mt-2 ml-1 mb-2">
  <button className="bg-blue-100 place-items-center p-1"><div ><GiSpookyHouse className="flex mt-3 mx-6 text-4xl "/><br/> <p className="font-semibold text-sm">All Residential</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><BsFillHouseDoorFill className="flex mt-3 mx-6 text-4xl "/><br/> <p className="font-semibold text-sm">House</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><GiHouse className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Guest House</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><BsBuilding className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Appartment</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><BiBuildingHouse className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Upper Portion</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><MdHouse className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Lower Portion</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><MdHouseSiding className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Farmhouse</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><MdBedroomParent className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Room</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><FaBuilding className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Penthouse</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><FaHotel className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Hotel Suites</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><MdOutlineOtherHouses className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Basement</p></div></button>
  <button className="bg-blue-100 place-items-center p-1"><div ><TbDotsCircleHorizontal className="flex mx-6 mt-3 text-4xl "/><br/> <p className="font-semibold text-sm">Others</p></div></button>
 </div>
  </>
  )
}

export default Gridpromv