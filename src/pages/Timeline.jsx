import React from 'react'

const Timeline = () => {
  // Timeline events based on the provided image, adapted for HackHer 2026
  const events = [
    {
      time: 'Friday - 6:00 pm',
      title: 'Check-in & welcome circle',
      description: 'Get your swag, meet your teammates, and settle into our cozy hacker den.',
      color: '#D4789C', // Pink/Violet
      dotColor: '#F2C6DE'
    },
    {
      time: 'Friday - 7:30 pm',
      title: 'Lightning talks & team forming',
      description: 'Hear rapid-fire inspo from speakers, then pitch or join an idea.',
      color: '#9B7BB8', // Purple
      dotColor: '#DBCDF0'
    },
    {
      time: 'Saturday - All day',
      title: 'Build, mentor sessions & snack breaks',
      description: 'Code, design, workshop and get unblocked with help from mentors.',
      color: '#6A9BC3', // Blue
      dotColor: '#C6DEF1'
    },
    {
      time: 'Sunday - 3:00 pm',
      title: 'Demos & celebration',
      description: 'Share what you built, cheer for your peers and celebrate every win.',
      color: '#5A8A7A', // Green
      dotColor: '#C9E4DE'
    },
  ]

  // Key Dates (Using the pink theme from the image and Hero.jsx for highlighting)
  const keyDates = [
    { label: 'Applications close', date: 'March 1, 2025' },
    { label: 'Event weekend', date: 'January 17-18, 2026' },
    { label: 'Venue', date: 'MACE Campus & Online Spaces' },
  ]

  return (
    <div 
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
            {'// 48 hours of making magic'}
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