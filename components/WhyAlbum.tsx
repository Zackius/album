import React from 'react'
import Image from 'next/image'
import Create from "@/assests/create.jpg"
import Save from "@/assests/share.jpg"
import Share from "@/assests/album.jpeg"


const WhyAlbum = () => {
  return (
    <div className="w-full bg-cover bg-center">
    <h2 className="text-center font-bold text-4xl">Why Use Album</h2>
    <div className="grid grid-cols-1 gap-10 grid-rows-3 w-4/5 mx-auto justify-center items-center m-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
        <div className="xl:pr-48 lg:pr-30 self-center">
          <p className="font-bold text-lg lg:text-xl">
            Discover new photos from friends and Save them.
          </p>
          <p className="text-base lg:text-lg pt-2">
          Album Manager lets you organize, explore, and share your favorite photo collections in a seamless web app.
          </p>
        </div>
        <div>
          <Image
            src={Save}
            alt="whytastebiteimg1"
            className="bg-primary-color w-64 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
        <div>
          <Image
            src={Create}
            alt="whytastebiteimg2"
            className="bg-secondary-color w-64 rounded "
          />
        </div>
        <div className="xl:pl-48 lg:pr-30 self-center">
          <p className="font-bold text-lg lg:text-xl">
            Create your own album
          </p>
          <p className="lg:text-lg pt-2">
          Album Manager allows you to organize your photos into personalized albums. 
          Explore categories like travel, family moments, or special events, all in one place.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center ">
        <div className="xl:pr-48 lg:pr-30 self-center ">
          <p className="font-bold text-lg lg:text-xl">
            Share Your album with the world
          </p>
          <p className="lg:text-lg pt-2">
          Showcase your favorite photo collections to friends and the community. Discover new albums through social networks and get inspired by others.
          </p>
        </div>
        <div >
          <Image
            src={Share}
            alt="whytastebiteimg3"
            className="bg-primary-color w-64 rounded"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhyAlbum