export default function Testimonials() {
    return (
      <section id="testimonials" className="px-6 py-16 bg-gray-100 dark:bg-[#121212]">
        <h2 className="text-3xl font-bold text-center mb-10">What People Are Saying</h2>
        <div className="flex justify-center gap-8">
          <div className="w-1/3 p-6 bg-white dark:bg-[#1e1e1e] rounded-xl shadow">
            <p>"Incredible scripting! Took my game to the next level."</p>
            <span className="font-bold">John Doe</span>
          </div>
          <div className="w-1/3 p-6 bg-white dark:bg-[#1e1e1e] rounded-xl shadow">
            <p>"Highly recommend working with this scripter!"</p>
            <span className="font-bold">Jane Smith</span>
          </div>
        </div>
      </section>
    )
  }
  