import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const navLinks = [
    { name: 'home', path:  '/' },
    { name: 'about', path: '#about' },
    { name: 'tracks', path: '#tracks' },
    { name: 'timeline', path: '#timeline' }
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
        style={{ 
          backgroundColor:  isScrolled ? 'rgba(253, 252, 250, 0.95)' : 'rgba(253, 252, 250, 0.8)',
          borderBottom: '2px solid #DBCDF0',
          backdropFilter: 'blur(12px)'
        }}
      >
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Left Section - HackHer Logo + IEEE MACE Logo (Mobile) */}
            <div className="flex items-center gap-3">
              {/* HackHer Logo Placeholder */}
              <a href="/" className="flex items-center">
                {/* REPLACE THIS DIV WITH YOUR HACKHER LOGO */}
                <img src="/hackher 1.png" alt="HackHer" className="h-14 w-auto" />
                
              </a>

              {/* IEEE MACE Logo - Shows on mobile, hidden on desktop (will show on right side) */}
              <a href="/" className="flex lg:hidden items-center">
                {/* REPLACE THIS DIV WITH YOUR IEEE MACE LOGO */}
                <img src="/logo ieee.png" alt="IEEE MACE" className="h-14 w-auto" /> 
                
              </a>
            </div>

            {/* Center Section - Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              <span style={{ color: '#9B7BB8' }}>{'['}</span>
              {navLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a 
                    href={link.path}
                    className="relative px-3 py-1. 5 text-sm transition-all duration-300 hover:opacity-70 group"
                    style={{ color: '#6A5A7A' }}
                  >
                    <span style={{ color: '#D4789C' }}>"</span>
                    <span className="group-hover:underline">{link.name}</span>
                    <span style={{ color: '#D4789C' }}>"</span>
                  </a>
                  {index < navLinks.length - 1 && (
                    <span className="text-xs" style={{ color: '#DBCDF0' }}>,</span>
                  )}
                </React.Fragment>
              ))}
              <span style={{ color: '#9B7BB8' }}>{']'}</span>
            </div>

            {/* Right Section - Time, Register & IEEE MACE Logo (Desktop) */}
            <div className="flex items-center gap-4">


              {/* IEEE MACE Logo - Desktop only */}
              <a href="/" className="hidden lg:flex items-center">
                {/* REPLACE THIS DIV WITH YOUR IEEE MACE LOGO */}
                <img src="/logo ieee.png" alt="IEEE MACE" className="h-10 w-auto" />
                
              </a>

              {/* Divider - Desktop only */}
              <div className="hidden lg:block w-px h-8" style={{ backgroundColor:  '#DBCDF0' }} />

              {/* Register Button - Desktop only */}
              <a 
                href="https://forms.gle/5F6S3r9mC1mKcGJC6"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex group items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 "
                style={{ 
                  background: 'linear-gradient(135deg, #DBCDF0 0%, #F2C6DE 100%)',
                  border: '1px solid #C5B5E0'
                }}
              >
                <span style={{ color: '#5A8A7A' }}>$</span>
                <span style={{ color: '#6A4A7A' }}>register</span>
                <span 
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: '#D4789C' }}
                >
                  →
                </span>
              </a>
              

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300"
                style={{ backgroundColor: 'rgba(219, 205, 240, 0.3)' }}
                onClick={() => setIsMobileMenuOpen(! isMobileMenuOpen)}
              >
                <div className="flex flex-col gap-1.5">
                  <span 
                    className={`block w-5 h-0.5 rounded transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                    style={{ backgroundColor: '#8B6AAF' }}
                  />
                  <span 
                    className={`block w-5 h-0.5 rounded transition-all duration-300 ${
                      isMobileMenuOpen ?  'opacity-0' : ''
                    }`}
                    style={{ backgroundColor: '#8B6AAF' }}
                  />
                  <span 
                    className={`block w-5 h-0.5 rounded transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                    style={{ backgroundColor: '#8B6AAF' }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ?  'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-[60px] left-0 right-0 font-mono transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          style={{ 
            backgroundColor:  'rgba(253, 252, 250, 0.98)',
            borderBottom: '2px solid #DBCDF0'
          }}
        >
          <div className="p-6 space-y-2">

            {/* Terminal Header */}
            <div className="flex items-center gap-2 text-xs mb-4 pb-4" style={{ borderBottom: '1px solid #DBCDF0' }}>
              <span style={{ color: '#5A8A7A' }}>$</span>
              <span style={{ color: '#6A5A7A' }}>cd</span>
              <span style={{ color: '#9B7BB8' }}>./navigation</span>
            </div>

            {/* Navigation Links */}
            {navLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.path}
                className="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 hover: translate-x-2"
                style={{ 
                  backgroundColor:  'rgba(219, 205, 240, 0.1)'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span style={{ color: '#C9E4DE' }}>{`0${index + 1}`}</span>
                <span style={{ color: '#D4789C' }}>→</span>
                <span className="font-medium" style={{ color: '#6A5A7A' }}>{link.name}</span>
                <span className="text-xs ml-auto" style={{ color:  '#9B7BB8' }}>. jsx</span>
              </a>
            ))}

            {/* Mobile Register Button */}
            <div className="pt-4 mt-4" style={{ borderTop:  '1px solid #DBCDF0' }}>
              <a 
                href="https://forms.gle/5F6S3r9mC1mKcGJC6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  background: 'linear-gradient(135deg, #DBCDF0 0%, #F2C6DE 50%, #C9E4DE 100%)',
                  border: '2px solid #C5B5E0'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span style={{ color: '#5A8A7A' }}>{'>'}</span>
                <span style={{ color: '#6A4A7A' }}>Register_Now()</span>
                <span style={{ color: '#D4789C' }}>_</span>
              </a>
            </div>

            {/* Footer Info */}
            <div className="flex items-center justify-between pt-4 text-xs" style={{ color: '#8A7A9A' }}>
              <span>IEEE MACE SB</span>
              <span>|</span>
              <span>HackHer 2026</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar