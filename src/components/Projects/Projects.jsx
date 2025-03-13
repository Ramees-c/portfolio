import React from 'react'
import ProjectsCard from '../ProjectsCard/ProjectsCard'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-10 justify-center'>
            <ProjectsCard  title="Blogging Website" main="this is a blogging website created in next js and 
            used some component library" />
            <ProjectsCard  title="Blogging Website" main="this is a blogging website created in next js and 
            used some component library" />
             <ProjectsCard  title="Blogging Website" main="this is a blogging website created in next js and 
            used some component library" />
        </div>
    </div>
  )
}

export default Projects