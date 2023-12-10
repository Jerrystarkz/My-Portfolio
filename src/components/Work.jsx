import React from 'react'
import Workitem from './Workitem'

const data = [
    {
        year: 2018,
        title: 'Lead Programmer (College-gig)',
        duration:'thirty six months',
        details:'was the lead developer at college-gig and created an e-commerce , edutainment platform and blog  as a fullstack developer using bootsrap and PHP'
      },
    
    {
        year: 2019,
        title: 'Front-end dev (Skill-Seeds)',
        duration:'one year',
        details: 'worked as a front end developer at skill-seeds  and was responsible for creating attractive web platforms and providing dynamic UI designs '
      },

    
    {
        year:2022,
        title: 'Front-end dev (Self thought)',
        duration: 'present position',
        details: 'For the last year and a half i have focused my skills on front end developement using react framework and typescript to create dynamic web apps that are user friendly and responsive across all devices'
       },
    


]

const Work = () => {
    return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 py-16'>
    <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
    {data.map((item, idx) =>(
      <Workitem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
    ))}
    </div>
    )
}

export default Work
