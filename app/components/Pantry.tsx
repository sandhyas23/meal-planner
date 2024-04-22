'use client'
import { fetchMealPlan } from '@/lib/fetchMealPlan';
import { usePantryStore } from '@/store/PantryStore';
import { XCircleIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';



type Props = {
  pantryItems: string[];
}

function Pantry({pantryItems}:Props) {
  const [deleteIngredient,mealPlanClicked,setMealPlanClicked,setWeekPlan] = usePantryStore((state) => 
                       [state.deleteIngredient,state.mealPlanClicked,state.setMealPlanClicked,state.setWeekPlan]);

  //const [mealPlanner,setMealPlanner] = useState<string>("");



  const generateMealPlan = () =>{
     setMealPlanClicked(true);
     const fetchMealPlanFunc = async() =>{
      const meal = await fetchMealPlan(pantryItems);
      setWeekPlan(meal);
      setMealPlanClicked(false);
  }
  fetchMealPlanFunc();
  }

  
  return (
    <div className='h-96 bg-white rounded-t-2xl mt-4 p-4'>
        {pantryItems.map((value,index,array) => {
            return <div key={`item${value}${index}`} className='flex justify-between items-center p-2'>
                <p key={`text${value}${index}`} className='border rounded-lg p-2 bg-lime-500 text-white font-extralight'>
                    {value.toUpperCase()}
                </p>
                <button onClick={()=> deleteIngredient(index)} className='text-red-500 hover:text-red-600'>
                   <XCircleIcon className='h-8 w-8'/>
                </button>
            </div>
        })}
            <button disabled={pantryItems.length < 5}
                    onClick={generateMealPlan}
                  className=' justify-center inline-flex rounded-md border mt-2 px-4 py-2
                  text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none disabled:cursor-not-allowed
                  disabled:text-gray-300 disabled:bg-gray-100 '>
              Generate Meal Plan!
            </button>
    </div>
  )
}

export default Pantry