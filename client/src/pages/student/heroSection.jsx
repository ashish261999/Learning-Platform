import { Button } from '@/components/ui/button';
import React from 'react'

export default function HeroSection() {
    return (
      <div className="relative bg-gradient-to-r from-blue-100 to-indigo-600 dark:from-gray-800 dark:to-gray-900 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-4">Find the best courses for you.</h1>
          <p className="text-gray-200 dark:text-gray-400 mb-8 text-lg">Explore a wide range of courses and learn at your own pace.</p>
          <form action="" className='flex items bg-white dark:bg-gray-800 rounded-full  dark:text-gray-200  shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
            <input 
            type='text'
            placeholder='Search for courses...'
            className=" flex-grow border-none focus-visible:ring-0  px-6 text-left ml-0 px-30 py-2 text-gray-900  dark:text-gray-200 border rounded-md w-full placeholder-gray-400 "
          />
            <Button className="bg-blue-600 dark:bg-gray-700 text-white px-5 py-2 rounded-r-full hover:bg-blue-700  dark:bg-gray-700 dark:text-gray-200"  > Search</Button>
            
          </form>
          <Button className='bg-white  dark:bg-gray-800 text-blue-600 dark:text-gray-200 rounded-full  hover:bg-gray-200 px-16  dark:hover:bg-blue-500'>Explore courses</Button>
        </div>
      </div>
    );
  }
  
  
