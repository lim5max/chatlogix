import { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="logo">
          <div className="logo-mark">C</div>
          ChatLogix
        </a>
        <a href="https://t.me/ChatLogixBot" className="nav-cta" target="_blank" rel="noopener">
          Попробовать
        </a>
      </div>
    </nav>
  )
}
