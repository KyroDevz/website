export default function Footer() {
    return (
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/KyroDevz" target="_blank" className="hover:text-violet-600">GitHub</a>
          <a href="https://x.com/kyrodevz" target="_blank" className="hover:text-violet-600">Twitter</a>
          <a href="https://create.roblox.com/talent/creators/1384090861" target="_blank" className="hover:text-violet-600">TalentHub</a>
        </div>
        <p>© {new Date().getFullYear()} Kyrodevz. Built with React & Tailwind.</p>
      </footer>
    )
  }
  