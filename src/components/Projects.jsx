  import { useState } from 'react'
  import { projects } from '../data/projects'
  import ProjectModal from './ProjectModal'
  
  export default function Projects() {
    const [activeProject, setActiveProject] = useState(null)
  
    return (
      <section id="projects" className="px-6 py-16 bg-gray-100 dark:bg-[#121212]">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setActiveProject(project)} 
              className="cursor-pointer overflow-hidden rounded-xl shadow hover:scale-105 transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white dark:bg-[#1e1e1e]">
                <h3 className="font-semibold dark:text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
  
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </section>
    )
  }
  