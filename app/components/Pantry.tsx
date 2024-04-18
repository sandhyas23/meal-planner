import { XCircleIcon } from '@heroicons/react/16/solid';
import React from 'react';

const ingredients: string[] = ['eggs','onion', 'tomato', 'bread']

function Pantry() {
  return (
    <div className='h-96 bg-white rounded-t-2xl mt-4 p-4'>
        {ingredients.map((value,index,array) => {
            return <div key={`item${value}${index}`} className='flex justify-between items-center p-2'>
                <p key={`text${value}${index}`} className='border rounded-lg p-2 bg-lime-500 text-white font-extralight'>
                    {value.toUpperCase()}
                </p>
                <button className='text-red-500 hover:text-red-600'>
                   <XCircleIcon className='h-8 w-8'/>
                </button>
            </div>
        })}
    </div>
  )
}

export default Pantry