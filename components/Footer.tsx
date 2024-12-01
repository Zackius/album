import React from 'react'
import { Facebook, X, Instagram } from 'lucide-react';


const Footer = () => {
  return (
    <div className="bg-green-200 text-black p-20 w-full ">
    <div className="w-4/5 mx-auto grid items-center justify-items-center grid-cols-3 md:grid-cols-3 md:justify-between">
      <div className="ml">
        <h2>Contact Us</h2>
        <h4>Kenyatta Avenue, 780-31, Nairobi</h4>
        <h4>+254716 526 170</h4>
      </div>

      <div className="text-center">
        <h1 className="font-bold text-xl">Album</h1>
    
        <h4 className="text-xs">
          A unique photo sharing and discovery platform
        </h4>
      </div>

      <div className="mr">
  <h1 className="text-2xl font-bold mb-4">Follow Us</h1>
  <ul className="flex flex-col items-center gap-4">
    <li className="flex items-center gap-2"><X /> Twitter</li>
    <li className="flex items-center gap-2"><Facebook /> Facebook</li>
    <li className="flex items-center gap-2"><Instagram /> Instagram</li>
  </ul>
</div>
      
    </div>
    <p className="text-sm text-center mx-auto mb-2 pt-10">
        2022 Album | All rights reserved.
      </p>
  </div>
  )
}

export default Footer