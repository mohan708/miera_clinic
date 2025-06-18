
import React from 'react'

const first_comp = () => {
  return (
    <section className='bg-slate-200 h-[100vh] text-black flex justify-center items-center'>
        {/* Text Block Start  */}
       <div className='flex flex-col  justify-center  items-center'>
               <h1 className='text-3xl md:text-5xl font-extralight'>Your Miracle Zone Awaits</h1>
               <p className='mt-1'>20 years of care. A new chapter begins soon.</p>
               <button className=' mt-5 py-2 px-4 rounded-[50px] bg-amber-500'>Be the First to know</button>
       </div>
       {/* Text Block End  */}
    </section>
  )
}

export default first_comp