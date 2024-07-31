import React from 'react'

const ChooseSize = () => {
  return (
    <div className=' flex flex-col space-y-2'>
    <h3 className='text-xs font-bold uppercase '>Choose a Size</h3>

    <div className='flex items-center space-x-3'>

        <button className=' text-xs text-lama ring-1 ring-lama px-2 py-1 rounded-md '>Large</button>
        <button className=' text-xs text-lama ring-1 ring-lama px-2 py-1 rounded-md '>Medium</button>
        <button className=' text-xs text-lama ring-1 ring-lama px-2 py-1 rounded-md '>Small</button>

    </div>
</div>
  )
}

export default ChooseSize