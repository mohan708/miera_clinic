import React from 'react'

const Second = () => {
  return (
   <section className='bg-white text-black py-10 w-full'>
       {/* starting of card component */}
        <div className=' max-w-[90vw] md:max-w-[80vw] mx-auto'>
            <div className='flex flex-col justify-between md:flex-row  gap-8 '>
            {/* starting of card */}
            <div className='flex w-full h-[15.625rem] md:w-[45%] bg-amber-400 rounded-[12px]  justify-center items-center '>
                <p>Founder Vison Placeholder</p>
            </div>
            {/* end of card  */}

            {/* starting of info */}
            <div className='flex flex-col justify-center items-center w-full md:w-[55%]'>
                <h1 className='self-start text-left text-2xl md:text-3xl pb-3'>More than a clinic. A philosophy of care.</h1>
                <p className='text-[15px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod consequuntur earum modi voluptas possimus nostrum sed ut provident rerum autem, aliquid distinctio laboriosam cumque quas voluptates maxime nobis nulla.</p>
            </div>
            {/* end of info div */}
        </div>
        </div>
        {/* end of card components */}
   </section>
  )
}

export default Second