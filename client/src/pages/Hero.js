import React from 'react'
import DefaultLayout from '../components/DefaultLayout'


function Hero (){
  return (
    <DefaultLayout>
  <div className="max-w-2xl mx-auto p-8">
    <h2 className="sm:tex-lg sm:leading-snug font-semibold tracking-wide uppercase">Muffin cake</h2>
   <p className='text-5xl lg:text-6xl leading-none font-extrabold text-gray-900'></p>
  
  <ul className='flex space-x-6'>
    
  <li className='flex flex-col items-center space-y-1 rounded-full'>
    <div className='relative bg-gradient-to-tr from-yellow-500 to-fuchsia-600  p-1 rounded-full'>
        <a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-20 w-20 rounded-full 'src='https://placekitten.com/200/205' alt='cute kitting'/>
        </a>
        <button className='create-story'>+</button>
        </div>
        <a className='block bg-white p-1 rounded-full' href='#'>you</a>
    </li>
    <li className='flex flex-col items-center space-y-1 rounded-full'>
    <div className='bg-gradient-to-tr from-yellow-500 to-fuchsia-600  p-1 rounded-full'>
        <a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-20 w-20 rounded-full 'src='https://placekitten.com/200/204' alt='cute kitting'/>
        </a>
        </div>
        <a className='block bg-white p-1 rounded-full' href='#'>kitty_three</a>
    </li>
    <li className='flex flex-col items-center space-y-1 rounded-full'>
    <div className='bg-gradient-to-tr from-yellow-500 to-fuchsia-600  p-1 rounded-full '>
        <a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-20 w-20 rounded-full 'src='https://placekitten.com/200/201' alt='cute kitting'/>
        </a>
        </div>
        <a className='block bg-white p-1 rounded-full' href='#'>kitty_two</a>
    </li>

    <li className='flex flex-col items-center space-y-1 rounded-full'>
    <div className='bg-gradient-to-tr from-yellow-500 to-fuchsia-600  p-1 rounded-full'>
        <a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-20 w-20 rounded-full 'src='https://placekitten.com/200/202' alt='cute kitting'/>
        </a>
        </div>
        <a className='block bg-white p-1 rounded-full' href='#'>kitty_three</a>
    </li>
    <li className='flex flex-col items-center space-y-1 rounded-full'>
    <div className='bg-gradient-to-tr from-yellow-500 to-fuchsia-600  p-1 rounded-full'>
        <a className='block bg-white p-1 rounded-full transform transition hover:-rotate-6' href='#'>
            <img className='h-20 w-20 rounded-full 'src='https://placekitten.com/200/206' alt='cute kitting'/>
        </a>
        </div>
        <a className='block bg-white p-1 rounded-full' href='#'>kitty_three</a>
    </li>
  </ul>
  
  </div>
  </DefaultLayout>
  )
}
export default Hero;