import React from 'react'

const Sixth = () => {
    return (
        <section className='bg-white text-black w-full  pb-10'>
              {/*  start of form component  for cheking git */}
<div className='px-4'>
            <div className=' max-w-screen-sm  mx-auto rounded-[10px] py-6 flex flex-col justify-center gap-2 items-center   shadow-xl shadow-gray-500/40'>
                {/* heading */}
                <h1 className='md:text-3xl text-2xl'>Be Part of the unfolding story</h1>

                {/* text info */}
                <p className='text-center'>join  the waitlist for exclusive updates early acess and opening announcement.</p>


                {/* start of form  */}
                <form action="" className='pt-4'>

                    <div className='flex flex-col pb-5 gap-1'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text"
                            id='name'
                            name='name'
                            className='border-1 md:w-[30vw] w-[55vw] h-[2.4rem] rounded-[.4rem] placeholder:p'
                        />
                    </div>

                    <div className='flex flex-col  pb-5 gap-1'>
                        <label htmlFor="name">Email</label>
                        <input type="email"
                            id='name'
                            name='name'
                            className='border-1 h-[2.4rem] rounded-[.4rem]'
                        />
                    </div>

                    <div className='flex flex-col  pb-5 gap-1'>
                        <label htmlFor="Number">Mobile(optional)</label>
                        <input type="number"
                            id='name'
                            name='name'
                            className='border-1 h-[2.4rem] rounded-[.4rem]'
                        />
                    </div>

                    <div className='flex flex-col gap-1 pb-7 '>
                        <label htmlFor="name">Interest</label>


                        <select

                            name='interest'
                            className='border-1 h-[2.4rem] rounded-[.4rem] p-1 ' // Added 'p-1' for a little internal padding
                        >
                            <option value="">Select an interest</option>
                            <option value="web-development">Web Development</option>
                            <option value="graphic-design">Graphic Design</option>
                            <option value="data-science">Data Science</option>
                            <option value="marketing">Marketing</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    {/* button */}
                    <div className='flex justify-center  bg-amber-700 rounded-[2rem]'>
                        <button className='py-2 '>Join the waitlist</button>
                    </div>
                    {/* end of button */}

                </form>
                {/* end of form  */}
            </div>
</div>
    {/* end of form component */}
        </section>
    )
}
export default Sixth