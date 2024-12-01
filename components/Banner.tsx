import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Nature from "@/assests/nature.jpeg"

const Banner = () => {
  return (
    <div className="bg-green-200 pt-8 my-10 grid grid-cols-1 gap-20 md:grid-cols-2 w-4/5 mx-auto items-center px-8 rounded-lg">
      <div className="flex flex-col gap-2 mr-2">
      <h1 className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold">Discover, Organize, Save and Share</h1>
<p className="md:text-base lg:text-lg pt-4">
   Album Manager is a versatile platform for managing and sharing your photo collections. 
   Users can save cherished memories, organize them into albums, and share them with friends and family.
</p>

        <Link href="/">
          <button className="inline-block md:text-base lg:text-lg shadow-md bg-secondary-color py-2 mt-6 mb-4 md:mb-4  rounded-full w-56 ">
            Get Started
          </button>
        </Link>
      </div>

      <div className="pl-10 md:pl-20 lg:pl-32 xl:pl-44 scale-100 md:scale-110 lg:scale-125 pb-4">
  <Image
    className="w-[250px] h-[250px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full"
    src={Nature}
    alt="banner"
  />
</div>

    </div>
  )
}

export default Banner