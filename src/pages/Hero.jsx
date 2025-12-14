import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes:  0,
    seconds: 0
  })

  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'The first-ever women-centric hackathon by IEEE MACE SB.  18 hours of innovation, creativity, and code.'

  useEffect(() => {
    const hackathonDate = new Date('2026-01-17T09:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = hackathonDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds:  Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Typing effect
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div 
      className="relative min-h-screen w-full overflow-hidden font-mono"
      style={{ background: 'linear-gradient(180deg, #FDFCFA 0%, #FAEDCB 20%, #F2C6DE 50%, #DBCDF0 80%, #C6DEF1 100%)' }}
    >
      {/* Scanline effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.03) 1px, rgba(0,0,0,0.03) 2px)'
        }}
      />

      {/* Floating code symbols */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span className="absolute top-[10%] left-[5%] text-5xl opacity-[0.08] animate-float" style={{ color: '#9B7BB8' }}>{'</>'}</span>
        <span className="absolute top-[15%] right-[10%] text-4xl opacity-[0.08] animate-float animation-delay-2000" style={{ color: '#D4789C' }}>{'{ }'}</span>
        <span className="absolute bottom-[30%] left-[8%] text-4xl opacity-[0.08] animate-float animation-delay-4000" style={{ color: '#6A9BC3' }}>{'( )'}</span>
        <span className="absolute bottom-[20%] right-[5%] text-5xl opacity-[0.07] animate-float animation-delay-1000" style={{ color:  '#5A8A7A' }}>{'[]'}</span>
        <span className="absolute top-[50%] right-[15%] text-3xl opacity-[0.08] animate-float animation-delay-3000" style={{ color: '#9B7BB8' }}>{'=>'}</span>
        <span className="absolute top-[70%] left-[12%] text-4xl opacity-[0.07] animate-float animation-delay-2500" style={{ color:  '#D4789C' }}>{'#!'}</span>
        <span className="absolute top-[35%] left-[3%] text-3xl opacity-[0.06] animate-float animation-delay-1500" style={{ color: '#6A9BC3' }}>{'/*'}</span>
        <span className="absolute bottom-[45%] right-[8%] text-3xl opacity-[0.06] animate-float animation-delay-3500" style={{ color: '#5A8A7A' }}>{'*/'}</span>
      </div>

      {/* Main Terminal - Full Width */}
      <div className="relative z-10 w-full min-h-screen">
        
       

        {/* Terminal Content */}
        <div className="flex flex-col items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 py-12 pt-24">          
          {/* Init Command */}
          <div className="w-full max-w-5xl mb-8 animate-fade-in">
            <div className="flex items-center gap-3 text-sm md:text-base">
              <span className="font-bold" style={{ color: '#5A8A7A' }}>$</span>
              <span style={{ color: '#6A5A7A' }}>npm run</span>
              <span className="font-semibold" style={{ color: '#9B7BB8' }}>hackher</span>
              <span style={{ color: '#D4789C' }}>--init</span>
              <span style={{ color: '#6A9BC3' }}>--year=2026</span>
            </div>
          </div>

          {/* ASCII Art Title */}
          <div className="w-full max-w-5xl mb-6 animate-fade-in-up overflow-x-auto">
            <pre 
              className="text-[0.7rem] sm:text-[0.8rem] md:text-large lg:text-2xl leading-tight text-center font-bold"
              style={{ color: '#8B6AAF' }}
            >
{`                                            
                                            
██  ██  ▄▄▄   ▄▄▄▄ ▄▄ ▄▄ ██  ██ ▄▄▄▄▄ ▄▄▄▄  
██████ ██▀██ ██▀▀▀ ██▄█▀ ██████ ██▄▄  ██▄█▄ 
██  ██ ██▀██ ▀████ ██ ██ ██  ██ ██▄▄▄ ██ ██ 
  
`}
            </pre>
          </div>

          {/* Tagline */}
          <div className="w-full max-w-5xl text-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-3">
              <span className="text-xl md:text-2xl" style={{ color: '#D4789C' }}>{'// '}</span>
              <span 
                className="text-xl md:text-3xl font-bold tracking-[0.2em]"
                style={{ color: '#8B6AAF' }}
              >
                BrainsOverBias
              </span>
            </div>
          </div>

          {/* Description with typing effect */}
          <div className="w-full max-w-5xl mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div 
              className="p-4 md:p-6 rounded-xl"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid #DBCDF0'
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg font-bold" style={{ color: '#6A9BC3' }}>{'>'}</span>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: '#5A4A6A' }}>
                  {displayedText}
                  <span 
                    className="inline-block w-2 h-5 ml-1 -mb-1"
                    style={{ 
                      backgroundColor: showCursor ? '#D4789C' :  'transparent',
                      transition: 'background-color 0.1s'
                    }}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Event Config Section */}
          <div className="w-full max-w-5xl mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-bold" style={{ color: '#5A8A7A' }}>$</span>
              <span style={{ color: '#6A5A7A' }}>cat</span>
              <span style={{ color: '#9B7BB8' }}>event. config. json</span>
            </div>
            
            <div 
              className="p-6 rounded-xl text-sm md:text-base"
              style={{ 
                backgroundColor:  'rgba(255, 255, 255, 0.6)',
                border:  '2px solid #C9E4DE'
              }}
            >
              <div style={{ color: '#6A5A7A' }}>{'{'}</div>
              <div className="pl-6 space-y-2 py-2">

                <div className="flex flex-wrap gap-x-2">
                  <span style={{ color: '#D4789C' }}>"date"</span>
                  <span style={{ color: '#6A5A7A' }}>:</span>
                  <span style={{ color:  '#5A8A7A' }}>"January 17, 2026"</span>
                  <span style={{ color: '#6A5A7A' }}>,</span>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <span style={{ color:  '#D4789C' }}>"venue"</span>
                  <span style={{ color: '#6A5A7A' }}>:</span>
                  <span style={{ color:  '#5A8A7A' }}>"MACE Campus"</span>
                  <span style={{ color: '#6A5A7A' }}>,</span>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <span style={{ color: '#D4789C' }}>"duration"</span>
                  <span style={{ color: '#6A5A7A' }}>:</span>
                  <span style={{ color:  '#5A8A7A' }}>"18 hours"</span>
                  <span style={{ color: '#6A5A7A' }}>,</span>
                </div>
                
              </div>
              <div style={{ color: '#6A5A7A' }}>{'}'}</div>
            </div>
          </div>

          {/* Countdown Section */}
          <div className="w-full max-w-5xl mb-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-bold" style={{ color: '#5A8A7A' }}>$</span>
              <span style={{ color: '#6A5A7A' }}>node</span>
              <span style={{ color: '#9B7BB8' }}>countdown. js</span>
            </div>
            
            <div 
              className="p-6 rounded-xl"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border:  '2px solid #F2C6DE'
              }}
            >
              {/* Code comment */}
              <div className="text-sm mb-4" style={{ color: '#9B7BB8' }}>
                {'// Time remaining until hackathon launch'}
              </div>
              
              <div className="flex items-center gap-2 text-sm mb-6" style={{ color: '#6A5A7A' }}>
                <span style={{ color: '#6A9BC3' }}>const</span>
                <span style={{ color: '#8B6AAF' }}>countdown</span>
                <span>=</span>
                <span>{'{'}</span>
              </div>
              
              <div className="grid grid-cols-4 gap-3 md:gap-6 mb-6">
                {[
                  { value: timeLeft.days, label: 'days', color: '#F2C6DE', borderColor: '#E8B0CC' },
                  { value: timeLeft.hours, label: 'hours', color: '#F2C6DE', borderColor: '#E8B0CC' },
                  { value: timeLeft. minutes, label: 'mins', color: '#F2C6DE', borderColor: '#E8B0CC' },
                  { value: timeLeft.seconds, label: 'secs', color: '#F2C6DE', borderColor: '#E8B0CC' }
                ].map((item) => (
                  <div 
                    key={item. label}
                    className="flex flex-col items-center p-3 md:p-5 rounded-xl transition-transform duration-300 hover: scale-105"
                    style={{ 
                      backgroundColor: item.color,
                      border: `2px solid ${item.borderColor}`
                    }}
                  >
                    <span 
                      className="text-2xl sm:text-3xl md:text-5xl font-bold tabular-nums"
                      style={{ color: '#4A3A5A' }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span 
                      className="text-[10px] md:text-xs mt-2 uppercase tracking-wider font-medium"
                      style={{ color: '#6A5A7A' }}
                    >
                      {item. label}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="text-sm" style={{ color: '#6A5A7A' }}>
                <span>{'}'}</span>
                <span className="ml-2" style={{ color: '#9B7BB8' }}>// updates every second</span>
              </div>
            </div>
          </div>

          {/* Register Section */}
<div className="w-full max-w-5xl animate-fade-in" style={{ animationDelay: '0.9s' }}>
  <div className="flex items-center gap-3 mb-4">
    <span className="font-bold" style={{ color: '#5A8A7A' }}>$</span>
    <span style={{ color: '#6A5A7A' }}>hackher</span>
    <span style={{ color: '#D4789C' }}>--register</span>
    <span style={{ color: '#6A9BC3' }}>--now</span>
  </div>

  <a
    href="https://forms.gle/5F6S3r9mC1mKcGJC6"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <button 
      className="group w-full py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      style={{ 
        background: 'linear-gradient(135deg, #DBCDF0 0%, #F2C6DE 50%, #C9E4DE 100%)',
        border: '2px solid #C5B5E0'
      }}
    >
      <span className="flex items-center justify-center gap-4 text-base md:text-lg font-bold">
        <span style={{ color: '#5A8A7A' }}>{'>'}</span>
        <span style={{ color: '#6A4A7A' }}>Register_Now()</span>
        <span 
          className="transition-transform duration-300 group-hover:translate-x-2"
          style={{ color: '#D4789C' }}
        >
          →
        </span>
      </span>
    </button>
  </a>

  {/* Success message preview */}
  <div className="mt-4 text-sm" style={{ color: '#5A8A7A' }}>
    <span style={{ color: '#6A5A7A' }}>{'// '}</span>
    <span>Ready to empower women in tech... </span>
    <span className="animate-blink" style={{ color: '#D4789C' }}>_</span>
  </div>
</div>


          {/* Footer */}
          <div className="w-full max-w-5xl mt-12 pt-6 border-t-2 animate-fade-in" style={{ borderColor: '#DBCDF0', animationDelay: '1. 1s' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ color: '#8A7A9A' }}>
              <div className="flex items-center gap-2">
                <span style={{ color: '#5A8A7A' }}>$</span>
                <span>echo</span>
                <span style={{ color: '#9B7BB8' }}>"Empowering Women in Technology"</span>
              </div>
              <div className="flex items-center gap-6">
                <span>IEEE MACE SB</span>
                <span>|</span>
                <span>HackHer 2026</span>
                <span>|</span>
                <span>v1.0.0</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero