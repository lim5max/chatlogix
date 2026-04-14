import { useReveal } from '../hooks/useReveal'
import './FinalCTA.css'

export default function FinalCTA() {
  const ref = useReveal()

  return (
    <section className="final" id="final-cta" ref={ref}>
      <div className="col">
        <div className="final-headline r">
          <span className="fh-word">Выжимайте</span>
          <span className="fh-word">все с<span className="fh-icon">🍊</span>ки</span>
          <span className="fh-word">из Telegram
            <svg viewBox="0 0 240 240" className="fh-tg" xmlns="http://www.w3.org/2000/svg">
              <rect width="240" height="240" rx="48" fill="#2AABEE"/>
              <path d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 132.2 176 76" fill="#C8DAEA"/>
              <path d="M98 175c3 0 4.3-1.4 6-3l16-15.6-20-12" fill="#A9C9DD"/>
              <path d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1l19.7-92.8c2-8.1-3.1-11.7-8.4-9.3L55 117.5c-7.9 3.2-7.8 7.6-1.4 9.5l36.2 11.3 83.8-52.8c4-2.4 7.6-1.1 4.6 1.5" fill="#fff"/>
            </svg>
          </span>
        </div>
        <p className="final-sub r d1">
          Подключите ChatLogix — и читайте только то, что действительно важно.
        </p>
        <a
          href="https://t.me/ChatLogixBot"
          className="hero-cta r d2"
          target="_blank"
          rel="noopener"
        >
          Попробовать бесплатно
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  )
}
