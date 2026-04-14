import { useReveal } from '../hooks/useReveal'
import './Hero.css'

export default function Hero() {
  const ref = useReveal()

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero-headline">
        <div className="hw r">
          Хватит&nbsp;
          <span className="hw-icon hw-icon--wave" role="img" aria-label="wave">🌊</span>
          &nbsp;тонуть
        </div>
        <div className="hw r d1">
          в&nbsp;с
          <span className="hw-icon hw-icon--msg" role="img" aria-label="messages">💬</span>
          общениях
        </div>
      </div>

      <div className="hero-bottom">
        <div className="col">
          <p className="hero-sub r d3">
            Саммари обсуждений, расшифровка голосовых,<br className="hide-mob" />
            дайджест по всем чатам и каналам в Telegram.
          </p>
          <a href="https://t.me/ChatLogixBot" className="hero-cta r d4" target="_blank" rel="noopener">
            Попробовать бесплатно
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      {/* Super Summary mockup */}
      <div className="col">
        <div className="hero-mockup r d4">
          <div className="ss">
            <div className="ss-head">
              <div className="ss-ava">C</div>
              <div>
                <div className="ss-name">ChatLogixBot</div>
                <div className="ss-meta">Super-summary за 24 часа</div>
              </div>
            </div>

            <div className="ss-group">
              <div className="ss-gtitle">📌 Маркетинг команда</div>
              <p className="ss-line">Запуск кампании перенесён на понедельник <span className="ss-cnt">(12)</span></p>
              <p className="ss-line">Утвердили бюджет на креативы Q2 <span className="ss-cnt">(5)</span></p>
              <div className="ss-ref">
                <span className="ss-ref-label">Ссылки:</span>
                <span className="ss-ref-link">Бриф на креативы — Google Docs</span>
                <span className="ss-ref-link">Медиаплан Q2 — Notion</span>
              </div>
            </div>

            <div className="ss-group">
              <div className="ss-gtitle">📌 Дизайн-клуб</div>
              <p className="ss-line">Тренды UI 2026 — подборка примеров <span className="ss-cnt">(8)</span></p>
              <p className="ss-line">Разбор редизайна Spotify <span className="ss-cnt">(4)</span></p>
            </div>

            <div className="ss-voice-block">
              <div className="ss-vplayer">
                <button className="ss-play" aria-label="Play">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </button>
                <div className="ss-waveform">
                  {[4,8,14,6,12,9,16,5,13,7,15,4,11,8,14,6,10,12,7,15,5,9,13,6,11,3,10,14,7,12,5,16,8,13,6,11,4,9,15,7,12,5,14,8,10,6,13,9,16,4,11,7].map((h, i) => (
                    <span key={i} className="ss-bar" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <span className="ss-dur">2:47</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
