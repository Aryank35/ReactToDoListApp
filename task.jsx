import React from 'react'

const task = ({title, desc , deleteTask , index}) => {
  return (
    <><hr className='bg-black h-1' />
    <div className='flex justify-between mx-[18%] items-center my-3 font-sans py-3'>
        <div className='flex flex-col space-y-2'>
            <p className='font-bold text-xl'>{title}</p>
            <span className='text-m'>{desc}</span>
        </div>
        <button onClick={()=> deleteTask(index)} className='bg-red-700 h-9 w-9 pb-[6px] font-bold text-2xl rounded-full text-white text-center flex justify-center items-center hover:bg-red-500 hover:text-black'>-</button>
    </div>
    </>
  )
}
export default task;