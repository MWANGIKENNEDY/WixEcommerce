import React from 'react'

const ChooseColor = () => {
  return (
    <div className=' flex flex-col space-y-2'>
        <h3 className='text-xs font-bold uppercase '>Choose a Color</h3>

        <div className='flex items-center space-x-3'>

            <div className=' h-8 w-8 bg-green-400 rounded-full'></div>
            <div className=' h-8 w-8 bg-red-400 rounded-full'></div>
            <div className=' h-8 w-8 bg-cyan-400 rounded-full'></div>

        </div>
    </div>
  )
}

export default ChooseColor