  // src/components/ProjectModal.jsx
  import { motion } from 'framer-motion'
  import { X } from 'lucide-react'
  
  export default function ProjectModal({ project, onClose }) {
    return (
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-white dark:bg-[#1a1a1a] rounded-xl p-6 max-w-lg w-full relative"
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
            <X size={24} />
          </button>
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-2xl font-bold mb-2 dark:text-white">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline"
            >
              View Project →
            </a>
          )}
        </motion.div>
      </motion.div>
    )
  }