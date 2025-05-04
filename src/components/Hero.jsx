import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center text-center px-4">
      <motion.h1 
        className="text-4xl md:text-6xl font-extrabold mb-4 dark:text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I'm a <span className="text-violet-600">Roblox Scripter</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-2xl dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        I build immersive game logic, client-server architecture, and interactive gameplay systems using Lua on the Roblox platform.
      </motion.p>
    </section>
  )
}
