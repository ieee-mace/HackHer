import React from 'react'

const Tracks = () => {
  const tracks = [
    {
      id: 1,
      name: 'HealthTech',
      description:  'Innovative solutions for healthcare challenges',
      color: '#F2C6DE',
      borderColor: '#E8B0CC'
    },
    {
      id:  2,
      name: 'EduTech',
      description: 'Revolutionizing learning experiences',
      color:  '#DBCDF0',
      borderColor: '#C5B5E0'
    },
    {
      id: 3,
      name:  'FinTech',
      description: 'Transforming financial services',
      color:  '#C9E4DE',
      borderColor: '#A8D5C8'
    },
    {
      id: 4,
      name: 'Sustainability',
      description: 'Technology for a greener future',
      color: '#FAEDCB',
      borderColor: '#E8DDB8'
    }
  ]

  return (
    <div 
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 font-mono"
      style={{ background: 'linear-gradient(180deg, #C6DEF1 0%, #DBCDF0 50%, #F2C6DE 100%)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-bold" style={{ color: '#5A8A7A' }}>$</span>
            <span style={{ color: '#6A5A7A' }}>ls</span>
            <span style={{ color: '#9B7BB8' }}>./tracks</span>
          </div>
          
          <h2 
            className="text-3xl md:text-4xl font-bold"
            style={{ color: '#8B6AAF' }}
          >
            {'// Hackathon Tracks'}
          </h2>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {tracks.map((track) => (
            <div 
              key={track.id}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: `2px solid ${track.borderColor}`
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: track.color, color: '#5A4A6A' }}
                >
                  0{track.id}
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#8B6AAF' }}>
                    {track.name}
                  </h3>
                  <span className="text-xs" style={{ color:  '#9B7BB8' }}>
                    track_{track.id}. jsx
                  </span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <span style={{ color: '#6A9BC3' }}>{'>'}</span>
                <p className="text-sm" style={{ color: '#5A4A6A' }}>
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm" style={{ color: '#8A7A9A' }}>
          <span style={{ color: '#5A8A7A' }}>{'// '}</span>
          <span>Open to all innovative ideas</span>
          <span className="animate-blink" style={{ color: '#D4789C' }}> _</span>
        </div>

      </div>
    </div>
  )
}

export default Tracks