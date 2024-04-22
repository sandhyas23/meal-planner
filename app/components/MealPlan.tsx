'use client'
import { usePantryStore } from '@/store/PantryStore';
import { ClockIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';


function MealPlan() {

  const [mealPlanClicked,setMealPlanClicked,weekPlan] = usePantryStore((state) => 
                       [state.mealPlanClicked,state.setMealPlanClicked,state.weekPlan]);

  
  const capitalizeFirstLetter = (string: string)  => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handlePrint =() => {
    window.print()
}

  

  return (
    <div className='flex items-center justify-center  object-contain md:w-9/12'>
      <div className='absolute top-0 left-1/4 w-full h-52 
                                 bg-gradient-to-br from-lime-600  to-white
                                 filter blur-xl -z-50 opacity-100'/>
        {weekPlan.meal.length < 1 ? <div className='flex justify-center items-center p-2 md:py-6 '>
          <p className='flex items-center  p-5 shadow-xl bg-white rounded-md font-medium text-xl
                              text-lime-600 w-fit max-w-3xl italic'>
              <ClockIcon className={`online-block h-10 w-10 text-blue-500 mr-2
               ${mealPlanClicked && "animate-spin"}`} />
                                
            Add 5 or more Ingredients to the pantry
            </p>
        </div> :
        <div >
            <table className='mt-4 table-auto rounded-lg  border-separate  border border-slate-800 border-spacing-2'>
              <thead>
                <tr className='p2'>
                  <th className=' rounded-lg p-4 border border-slate-600 bg-green-400 text-xl font-bold'>DAY</th>
                  <th className=' rounded-lg p-4 border border-slate-600 bg-green-400 text-xl font-bold'>BREAKFAST</th>
                  <th className=' rounded-lg p-4 border border-slate-600 bg-green-400 text-xl font-bold'>LUNCH</th>
                  <th className=' rounded-lg p-4 border border-slate-600 bg-green-400 text-xl font-bold'>DINNER</th>
                </tr>
              </thead>
              <tbody>
                {weekPlan.meal.map((value,index,array) =>{
                  return <tr key={`row${index}`} className='p-4'>
                    <td key={`day${index}`} className='rounded-lg p-4 border border-slate-600  bg-emerald-400 text-xl font-light italic'>
                      {capitalizeFirstLetter(value.day)}
                    </td>
                    <td key={`breakfast${index}`} className='rounded-lg p-2 border border-slate-600 text-xl font-light'>
                      {capitalizeFirstLetter(value.breakfast)}
                    </td>
                    <td key={`lunch${index}`} className='rounded-lg p-2 border border-slate-600 text-xl font-light'>
                      {capitalizeFirstLetter(value.lunch)}
                    </td>
                    <td key={`dinner${index}`} className='rounded-lg p-2 border border-slate-600 text-xl font-light'>
                      {capitalizeFirstLetter(value.dinner)}
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
           <div><button 
              onClick={handlePrint}
              className=' justify-center inline-flex rounded-md border mt-2 px-4 py-2
                  text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none disabled:cursor-not-allowed
                  disabled:text-gray-300 disabled:bg-gray-100 '>
            Print 
            </button></div>
            
        </div>
        }

    </div>
  )
}

export default MealPlan