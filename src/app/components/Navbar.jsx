import React from 'react'

const Navbar = () => {
  return (
    // navigation bar 
   <nav className='bg-white text-black  fixed w-full'>
    {/* starting of navigation bar  */}
    <div className='flex justify-between px-4 py-2'>

        {/* logo part */}
        <div>MIREA</div>
        {/* end of logo */}


        {/* nav list part  */}
        <ul className='flex gap-4'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Dr Meghna</a></li>
            <li><a href="">Contact</a></li>          
        </ul>
        {/* end of nav list part */}
    </div>
    {/* end of navigation bar */}
   </nav>
  )
}

export default Navbar