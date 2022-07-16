import Head from 'next/head'
import Image from 'next/image'
import Browsepropertiesmv from './Browsepropertiesmv'
import Brands from './components/Brands'
import Mvdownmenu from './components/Mvdownmenu'
import Videogrid from './components/Videogrid'

import Navbar from './Navbar'
import Searchbarmv from './Searchbarmv'


export default function Home() {
  return (
   <>
   <Navbar/>

        <Searchbarmv/>
        
        <Browsepropertiesmv/>
        <Videogrid/>
        <Brands/>
        <div className="mt-10 object-bottom">
       <Mvdownmenu/>
       </div>
        
        
</>
  )
}
