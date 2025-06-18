import React from 'react'

const Third = () => {
  return (
  <section className='bg-white text-black py-10'>

    <div className='max-w-[90vw]  md:max-w-[80vw] m-auto rounded-[10px] bg-gray-100'>
        
            <div className='flex flex-col   justify-center items-center py-10'>

                {/* heading div */}
                <div className=' pb-6'>
                    <h1>Why We're Evolving</h1>
                </div>
                {/* end of heading div */}


                {/* start of card div */}
                <div className='flex gap-6 flex-col md:flex-row px-4'>
                    <div className=' bg-white flex flex-col justify-center items-center gap-4 py-4 rounded-[10px] px-4'>
                        <img src="user.png" alt=""  className='rounded-[50%]'/>
                        <h1>Delhi Skin Center</h1>
                        <p className='flex justify-center items-center text-center'>Two Decades of trusted dermatological excellence and patience care</p>
                    </div>

                     <div className=' bg-white flex flex-col justify-center items-center gap-4 py-4 rounded-[10px] px-4'>
                        <img src="user.png" alt=""  className='rounded-[50%]'/>
                        <h1>Delhi Skin Center</h1>
                        <p className='flex justify-center items-center text-center'>Two Decades of trusted dermatological excellence and patience care</p>
                    </div>
                     <div className=' bg-white flex flex-col justify-center items-center gap-4 py-4 rounded-[10px] px-4'>
                        <img src="user.png" alt=""  className='rounded-[50%]'/>
                        <h1>Delhi Skin Center</h1>
                        <p className='flex justify-center items-center text-center'>Two Decades of trusted dermatological excellence and patience care</p>
                    </div>
                

                </div>
                {/* end of card div */}
            </div>
        
    </div>
                 
  </section>
  )
}

export default Third