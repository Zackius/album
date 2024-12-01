import Link from 'next/link'
import React from 'react'
import Logo from "@/assests/logo.jpg"
import Image from 'next/image'

const Dashboard = () => {
  return (
    <div className="flex w-11/12 mx-auto items-center justify-between">
    <div className="pt-2 pl-">
      <Image src={Logo} className="w-[100px] h-[100px] rounded-full" alt="logo" />
    </div>
    <div className="flex-6 hidden md:flex">
      <ul className="flex justify-center gap-8 p-12 list-none font-base cursor-pointer mr-9">
        <li className=" hover:text-secondary-color">Home</li>
        <li className=" hover:text-secondary-color">Photos</li>
      </ul>
    </div>
    <div className="flex gap-3 ">
      <div>
        <Link href="/"
      
          className="hover:text-secondary-color text-lg font-base underline"
        >
          Register
        </Link>
      </div>
      <div>
        <Link href="/"
          className="font-light bg-red-400 shadow-md text-white text-xl px-6 py-2 rounded-full"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Dashboard