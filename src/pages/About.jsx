import React from 'react'

const About = () => {
  return (
    <section
      id='about'
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 font-mono"
      style={{
       background: "linear-gradient(180deg, #C6DEF1 0%, #DBCDF0 50%, #C6DEF1 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">

       <div className="bg-[#FFF7EB] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.10)] p-10 md:p-14 relative">
          {/* Pattern Bar */}
          <div
            className="absolute top-0 left-0 w-full h-6 rounded-t-2xl"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #e1c9a8 0, #e1c9a8 10px, #f3e3cf 10px, #f3e3cf 20px)"
            }}
          ></div>

          {/* Top Label */}
          <p className="text-center text-xs tracking-widest text-gray-600 font-semibold mt-6">
            ABOUT THE EVENT
          </p>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            A hackathon that feels like a sleepover (with way more code)
          </h2>

          {/* Subtext */}
          <p className="text-center text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
            <strong>HackHer 2025</strong> is a 2-day creativity sprint where women technologists
come together to prototype bold ideas, build meaningful connections,
and get mentored by industry leaders.
          </p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100 
                            transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-pink-50">
              <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold">
  New connections
</span>

              <h3 className="mt-4 font-semibold text-gray-900">Safe & supportive</h3>
              <p className="text-gray-600 text-sm mt-2">
                A welcoming, beginner-friendly space where every question is valid and every voice matters.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100
                            transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-50">
              <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-semibold">
                Mentors
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">1:1 guidance</h3>
              <p className="text-gray-600 text-sm mt-2">
                Access mentors from product, design & engineering to help you unlock your next big thing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100
                            transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-pink-50">
              <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-semibold">
                Workshops
              </span>
              <h3 className="mt-4 font-semibold text-gray-900">Skill-building</h3>
              <p className="text-gray-600 text-sm mt-2">
                Hands-on sessions on everything from pitching your idea to shipping your first app.
              </p>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  )
}

export default About

