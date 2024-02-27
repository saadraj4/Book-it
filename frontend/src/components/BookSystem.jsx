import React from 'react'
import { AiOutlineLaptop, AiOutlineBars, AiOutlineAlert, AiOutlineAmazon } from 'react-icons/ai'
export default function BookSystem() {
  return (
    <div>
    <div className='book-system bg-slate-300 top-[65%] relative w-full px-20 py-8'>
      <div className='form-group'>
      <p className='text-2xl py-3 pb-5'>Search for a route</p>
      <form className='form sm:flex items-center justify-evenly ' method='GET'>
      
        <div className='from sm:w-[25%] py-2'>
          <input placeholder='From...' autoFocus className=' w-full input border outline-none px-3 py-2 border-slate-400 rounded' type='text' />
        </div>
        <div className='from sm:w-[25%] py-2'>
          <input autoFocus placeholder='To...   ' className=' w-full input border outline-none px-3 py-2 border-slate-400 rounded' type='text' />
        </div>
        <div className='from sm:w-[25%] py-2'>
          <input autoFocus placeholder='Date' className=' w-full input border outline-none px-3 py-2 border-slate-400 rounded' type='date' />
        </div>
        <div className='from sm:w-[15%] w-[50%] py-2'>
          <button autoFocus className=' w-full input border outline-none  py-2 bg-slate-700 text-white border-slate-400 rounded' type='submit'>
          Search
          </button>
        </div>
      </form>
      </div>
    </div>
    </div>
  )
}
