import { useReveal } from '../hooks/useReveal'
import './Trust.css'

const cards = [
  {
    icon: '\u{1F6E1}\uFE0F',
    title: 'Не храним сообщения',
    text: 'Бот обрабатывает текст на лету и не сохраняет переписку. Ваши данные остаются вашими.',
  },
  {
    icon: '\u26A1',
    title: 'Мгновенная обработка',
    text: 'Саммари и расшифровки генерируются за секунды, даже для больших обсуждений.',
  },
  {
    icon: '\u{1F381}',
    title: 'Бесплатный старт',
    text: 'Базовые функции работают бесплатно. Начните прямо сейчас — без карты и регистрации.',
  },
]

export default function Trust() {
  const ref = useReveal()

  return (
    <section className="trust" id="trust" ref={ref}>
      <div className="col">
        <div className="sec-label r">Почему нам доверяют</div>
        <h2 className="sec-title r d1">Просто, безопасно, бесплатно</h2>

        <div className="trust-grid">
          {cards.map((c, i) => (
            <div className={`trust-card r d${i + 1}`} key={c.title}>
              <div className="trust-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
