import { Cpu, Code, Terminal } from 'lucide-react'

const skills = [
  { icon: <Terminal />, name: 'Lua' },
  { icon: <Code />, name: 'OOP Patterns' },
  { icon: <Cpu />, name: 'RemoteEvents & Modules' },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 bg-gray-100 dark:bg-[#121212]">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center bg-white dark:bg-[#1e1e1e] p-4 rounded-xl shadow w-40">
            <div className="text-violet-600 mb-2">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
