import React from 'react'

const Fourth = () => {
  return (
   <section className='bg-white text-black'>
    <div className='max-w-[90vw] mx-auto md:max-w-[80vw] py-6'>
        <div className='flex flex-col'>
            {/* start heading */}
             <div className='flex  justify-center text-2xl py-6'> <h1>what waits You </h1></div>  
             {/* end heading */}

             {/* start card */}
             <div className=' gap-4 justify-center w-full grid grid-cols-2 md:grid-cols-4 '>

                 <div className='shadow-lg shadow-gray-500/40 flex flex-col justify-center items-center py-4 px-6 gap-2 rounded-[8px] w-full'> 
                    <img src="user.png" alt="" className='rounded-[50%] w-[40%]'/>
                    <h1 className='flex text-center'>Aesthetic Medicine</h1>
                 </div>
                  <div className='shadow-lg shadow-gray-500/40 flex flex-col justify-center items-center py-4 px-6 gap-2 rounded-[8px] w-full'> 
                    <img src="user.png" alt="" className='rounded-[50%] w-[40%]'/>
                    <h1 className='flex text-center'>Aesthetic Medicine</h1>
                 </div>
                  <div className='shadow-lg shadow-gray-500/40 flex flex-col justify-center items-center py-4 px-6 gap-2 rounded-[8px] w-full'> 
                    <img src="user.png" alt="" className='rounded-[50%] w-[40%]'/>
                    <h1 className='flex text-center'>Aesthetic Medicine</h1>
                 </div>
                  <div className='shadow-lg shadow-gray-500/40 flex flex-col justify-center items-center py-4 px-6 gap-2 rounded-[8px] w-full'> 
                    <img src="user.png" alt="" className='rounded-[50%] w-[40%]'/>
                    <h1 className='flex text-center'>Aesthetic Medicine</h1>
                 </div>

            </div>
             {/* end card */}
        </div>
    </div>
   </section>
  )
}

export default Fourth