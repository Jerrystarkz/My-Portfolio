import React from 'react'
import ProjectItem from './ProjectItem'
import Gymweb from '../assets/Image/Projects/gymweb.png'
import Potfolio from '../assets/Image/Projects/potfolio.png'
import Todo from '../assets/Image/Projects/Todo list.png'
import Vitegit from '../assets/Image/Projects/vite-git.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-29 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'> My Projects</h1>
      <p className='text-center py-8'>In The last two years i have engaged in developing dynamic web apps as a 
        front end developer and improving my skill using react framework. 
        This are some of my simple projects </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem  img={Gymweb} title='Gymweb' />
            <ProjectItem  img={Potfolio} title='MyPotfolio' />
            <ProjectItem  img={Todo} title='TodoList' />
            <ProjectItem  img={Vitegit} title='ViteAppPublished' />  
        </div>
    </div>
  )
}

export default Projects
