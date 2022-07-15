import Head from 'next/head'
import Image from 'next/image'
import Browsepropertiesmv from './Browsepropertiesmv'
import Navbar from './Navbar'
import Searchbarmv from './Searchbarmv'


export default function Home() {
  return (
   <>
   <Navbar/>

        <Searchbarmv/>
        <Browsepropertiesmv/>

</>
  )
}
