'use client'
import { usePantryStore } from '@/store/PantryStore';
import React from 'react';


function MealPlan() {

  const [mealPlanClicked,setMealPlanClicked,mealPlanner] = usePantryStore((state) => 
                       [state.mealPlanClicked,state.setMealPlanClicked,state.mealPlanner]);
  return (
    <div className=' md:w-9/12 items-center'>
      <div className='absolute top-0 left-1/4 w-full h-52 
                                 bg-gradient-to-br from-green-600  to-white
                                 filter blur-xl -z-50 opacity-100'/>
        {!mealPlanClicked? "Enter ingredients" :
        <div>
          <p>
            {mealPlanner}
          </p>
        </div>
        }

    </div>
  )
}

export default MealPlan