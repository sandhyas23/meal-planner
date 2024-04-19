'use client'
import React, { FormEvent, useState } from 'react'
import Pantry from './Pantry';
import { Bars3Icon, EllipsisVerticalIcon } from '@heroicons/react/16/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';





function SideBar() {
  const [ingredient,setIngredient] = useState<string>("");
  const [pantryItems ,setPantryItems] = useState<string[]>([]);


  const handleSubmit =(e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ingredient);
   if(!pantryItems.includes(ingredient)){
      pantryItems.push(ingredient);
      setPantryItems(pantryItems);
   }
   else{
    alert("item already present");
   }
   setIngredient("");
  }

  return (
    <div className='w-44 md:w-3/12 pb-10 md:pb-0 object-contain'>
      <div className='flex-col'>
      {/* gradient background */}
      <div className='absolute top-0 left-0 w-3/12 h-52 
                                 bg-gradient-to-br from-red-600  to-purple-600
                                 filter blur-xl -z-50 opacity-100'/>

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

        {/* Add ingredients */}
        <div className='flex items-center flex-1 justify-center w-full pb-4'>
          <form onSubmit={handleSubmit} className='flex items-center space-x-5 bg-white rounded-md shadow-md flex-1 md:flex-initial
                        p-1'>
            <MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />
            <input type='text'
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              placeholder="Add ingredients enter"
              className='flex-1 outline-none p-1' />
            <button type='submit' hidden />
          </form>
        </div>

      </div>


      {/* pantry ingredients */}
      <Pantry pantryItems={pantryItems} />
    </div>
  )
}

export default SideBar;