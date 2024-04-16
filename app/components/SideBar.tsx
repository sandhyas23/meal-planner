import React from 'react'
import Pantry from './Pantry';
import { Bars3Icon, EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


function SideBar() {
  return (
    <div className='w-44 md:w-3/12 pb-10 md:pb-0 object-contain'>
      <div className='flex-col bg-pink-500'>

        <div className='flex items-center flex-1 w-full'>

          <button className='flex items-center m-2 p-2'>
            <Bars3Icon className='h-6 w-6 text-white' />
          </button>

          <div className='flex flex-col items-center w-full justify-center m-2 p-2'>
            <p className='flex font-medium text-white  text-2xl'>
              Pantry
            </p>
            <p className='flex font-extralight text-xs text-white'>you have 8 ingredients</p>
          </div>

          <button className='flex  justify-end m-2 p-2 '>
            <EllipsisVerticalIcon className=' h-6 w-6 text-white' />
          </button>

        </div>

        {/* Add search box */}
        <div className='flex items-center flex-1 justify-center w-full pb-4'>
          <form className='flex items-center space-x-5 bg-white rounded-md shadow-md flex-1 md:flex-initial
                        p-1'>
            <MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />
            <input type='text'
              placeholder="Search for ingredients"
              className='flex-1 outline-none p-1' />
            <button type='submit' hidden />
          </form>
        </div>

      </div>


      {/* pantry ingredients */}
      <Pantry />
    </div>
  )
}

export default SideBar;