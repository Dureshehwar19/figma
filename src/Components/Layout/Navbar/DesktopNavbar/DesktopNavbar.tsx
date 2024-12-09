import Link from 'next/link';
import React from 'react';
import { navdata as data, navdata } from '../navdata';
import { FiSearch } from 'react-icons/fi'

const DasktopNavbar = () => {
  return (
    <div>
        <nav className='bg-white py-4 hidden lg:block'>
      <div className='container px-6  flex items-center justify-between  gap-24'>
        <div>
          <Link href='/'>
            <h2 className='text-navy'>Hekto</h2>
          </Link>
        </div>

        <div className='flex items-center gap-9'>
        {data.map((item, index) => {
  return item.type === 'link' && item.href ? (
    <Link key={index} href={item.href}>
      <a className="text-[1.1rem]">{item.title}</a>
    </Link>
  ) : (
    <button key={index} className="text-[1.1rem]">
      {item.title}
    </button>
  );
})}
        </div>

          <div className="w-full">
                    <div className='flex justify-end'>
                      <input 
                      type="search" 
                      name="" 
                      id="" 
                      className='border border-solid border-gray-300'
            
                      />
                        <button className='bg-pink text-white px-4'>
                            <FiSearch/>
                        </button>
                    </div>
          </div>

      </div>
    </nav>
    </div>
  )
}

export default DasktopNavbar