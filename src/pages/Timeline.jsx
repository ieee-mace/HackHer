import React from 'react'

const Timeline = () => {
  // Timeline events based on the provided image, adapted for HackHer 2026
  const events = [
  {
    time: "December 9",
    title: "Registration starts",
    description: "Kickstart your HackHer journey — applications officially open.",
    color: "#D4789C",
    dotColor: "#F2C6DE"
  },
  {
    time: "Pre-event 1",
    title: "Community warm-up",
    description: "Icebreakers, mini workshops, and announcements leading up to the hack.",
    color: "#9B7BB8",
    dotColor: "#DBCDF0"
  },
  {
    time: "Pre-event 2",
    title: "Theme reveal & prep session",
    description: "Learn the challenge themes and prepare with mentors before the hack begins.",
    color: "#6A9BC3",
    dotColor: "#C6DEF1"
  },
  {
    time: "December 31",
    title: "Registrations close",
    description: "Final day to submit your application — don’t miss it!",
    color: "#5A8A7A",
    dotColor: "#C9E4DE"
  },
  {
    time: "January 9",
    title: "Shortlisting",
    description: "Selected participants will receive confirmations via email.",
    color: "#C27BA0",
    dotColor: "#F4CFE5"
  },
  {
    time: "January 16 — 9:00 AM",
    title: "Hack starts",
    description: "Gear up for 18 hours of creation, collaboration, and problem-solving!",
    color: "#A186CC",
    dotColor: "#E3D6F6"
  },
  {
    time: "January 17 — 3:00 AM",
    title: "Hack ends",
    description: "Tools down! Submit your projects for judging.",
    color: "#6AB8A3",
    dotColor: "#D4F1E8"
  },
  {
    time: "January 17 — 10:00 AM",
    title: "Prize distribution & closing ceremony",
    description: "Celebrate innovation, teamwork and your 18-hour journey!",
    color: "#D4A373",
    dotColor: "#FFE8D1"
  }
];


  // Key Dates (Using the pink theme from the image and Hero.jsx for highlighting)
const keyDates = [
  { label: "Registration opens", date: "December 9, 2025" },
  { label: "Registration closes", date: "December 31, 2025" },
  { label: "Shortlisting", date: "TBA" },
  { label: "Hackathon starts", date: "January 16, 2026" },
  { label: "Hackathon ends", date: "January 17, 2026" },
  { label: "Event duration", date: "18 hours" }
];


  return (
    <div 
    id = 'timeline'
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 font-mono"
style={{
  background: 'linear-gradient(180deg, #F2C6DE 0%, #FAEDCB 50%, #C6DEF1 100%)'
}}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#D4789C' }}>
            Schedule
          </p>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: '#8B6AAF' }}
          >
            {'// 18 hours of making magic'}
          </h2>
          <p className="text-lg md:text-xl" style={{ color: '#6A5A7A' }}>
            From opening circle to demo night, here's a sneak peek at what your HackHer weekend will look like.
          </p>
        </div>

        {/* Timeline Content */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Timeline Events Column */}
          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#DBCDF0' }} />

            {events.map((event, index) => (
              <div key={index} className="flex items-start relative pl-8 md:pl-10">
                {/* Dot/Checkpoint */}
                <div 
                  className="absolute left-0 w-6 h-6 rounded-full flex items-center justify-center -translate-x-1/2"
                  style={{ backgroundColor: event.dotColor, border: `3px solid ${event.color}` }}
                >
                  <span className="text-xs font-bold" style={{ color: event.color }}>{index + 1}</span>
                </div>

                <div className="bg-white/70 p-4 rounded-xl w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                     style={{ border: `1px solid ${event.dotColor}` }}>
                  <p className="text-xs uppercase font-medium mb-1" style={{ color: event.color }}>
                    {event.time}
                  </p>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#8B6AAF' }}>
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5A4A6A' }}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Dates and What to Bring Column */}
          <div className="space-y-8 pt-4">
            
            {/* Key Dates Block (Pink Theme) */}
            <div 
              className="p-6 rounded-xl animate-fade-in"
              style={{ 
                backgroundColor: '#F2C6DE', 
                border: '2px solid #D4789C' 
              }}
            >
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider" style={{ color: '#4A3A5A' }}>
                Key dates
              </h3>
              <div className="space-y-3 text-sm">
                {keyDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="font-semibold" style={{ color: '#5A4A6A' }}>{item.label}:</span>
                    <span className="font-medium text-right" style={{ color: '#D4789C' }}>{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Bring Block */}
            <div 
              className="p-6 rounded-xl animate-fade-in"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                border: '2px solid #C9E4DE' 
              }}
            >
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider" style={{ color: '#6A5A7A' }}>
                What to bring
              </h3>
              <div className="flex items-start gap-2">
                <span style={{ color: '#5A8A7A' }}>{'>'}</span>
                <p className="text-sm leading-relaxed" style={{ color: '#5A4A6A' }}>
                  Laptop, charger, your favourite hoodie, and a willingness to try something new.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm" style={{ color: '#8A7A9A' }}>
          <span style={{ color: '#5A8A7A' }}>{'// '}</span>
          <span>Initiate: HackHer 2026 Timeline Loaded</span>
          <span className="animate-blink" style={{ color: '#D4789C' }}> _</span>
        </div>

      </div>
    </div>
  )
}

export default Timeline