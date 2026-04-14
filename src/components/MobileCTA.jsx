import { useEffect, useState } from 'react'
import './MobileCTA.css'

export default function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      const final = document.getElementById('final-cta')
      if (!hero || !final) return

      const heroBottom = hero.getBoundingClientRect().bottom
      const finalTop = final.getBoundingClientRect().top
      const show = heroBottom < 0 && finalTop > window.innerHeight

      setVisible(show)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`mob-cta ${visible ? 'show' : ''}`}>
      <a href="https://t.me/ChatLogixBot" className="mob-cta-btn" target="_blank" rel="noopener">
        Попробовать бесплатно
      </a>
    </div>
  )
}
