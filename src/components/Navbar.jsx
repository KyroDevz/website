import { Moon, Sun } from 'lucide-react'


export default function Navbar() {
 

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-[#1a1a1a] shadow">
      <h1 className="text-2xl font-bold text-violet-600">Kyrodevz</h1>
      <div className="flex items-center gap-6">
        <a href="#about" className="hover:text-violet-600">About</a>
        <a href="#projects" className="hover:text-violet-600">Projects</a>
        <a href="#contact" className="hover:text-violet-600">Contact</a>
      </div>
    </nav>
  )
}
