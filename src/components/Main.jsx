import React from 'react'
import  Image from '../assets/Image/nomad.jpeg'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={Image} alt="Image" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/30'>
        <div className='max-w-[1040px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl fot-bold text-gray-200'>Jerry Starkz</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-200'> I'm a </h2>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Computer Scientist',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Software Engineer',
                2000,
                'Web Developer ',
                2000,
                'Frontend Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block', paddingLeft: '5px', }}
              repeat={Infinity}
            />
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <a href='https://www.instagram.com/jerrystarkz/' ><FaInstagram className='cursor-pointer' size={20} /></a>
                <a href='https://twitter.com/jerry_starkz'><FaTwitter  className='cursor-pointer' size={20} /></a>
                <a href='https://web.facebook.com/jerry.nuhu'><FaFacebookF className='cursor-pointer' size={20} /></a>
                <a href='https://www.linkedin.com/in/jerry-nuhu-b79992142'><FaLinkedinIn className='cursor-pointer' size={20} /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
