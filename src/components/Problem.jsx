import { useReveal } from '../hooks/useReveal'
import './Problem.css'

const userPains = [
  { emoji: '😫', text: '500+ непрочитанных каждое утро' },
  { emoji: '🤷', text: 'Пропустил день — потерял контекст' },
  { emoji: '🎙️', text: 'Голосовые на 4 минуты без наушников' },
  { emoji: '😴', text: '15 чатов, сил следить за двумя' },
]

const adminPains = [
  { emoji: '🚪', text: 'Новички видят хаос и уходят' },
  { emoji: '🌊', text: 'Полезное тонет в оффтопе' },
  { emoji: '🔕', text: 'Участники мьютят и забывают' },
  { emoji: '📉', text: 'Контент есть, читателей нет' },
]

export default function Problem() {
  const ref = useReveal()

  return (
    <section className="problem" id="problem" ref={ref}>
      <div className="col">
        <h2 className="sec-title r">Знакомо?</h2>
        <p className="sec-sub r d2">Чаты создавались для удобства.<br />Но стали источником стресса.</p>

        <div className="problem-duo r d3">
          <div className="problem-col">
            <div className="problem-col-head">
              <span className="problem-col-icon">👤</span>
              <h3>Для участников</h3>
            </div>
            <ul className="problem-list">
              {userPains.map((p, i) => (
                <li key={i} className="problem-item">
                  <span className="problem-emoji">{p.emoji}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="problem-divider" />

          <div className="problem-col">
            <div className="problem-col-head">
              <span className="problem-col-icon">⚙️</span>
              <h3>Для админов</h3>
            </div>
            <ul className="problem-list">
              {adminPains.map((p, i) => (
                <li key={i} className="problem-item">
                  <span className="problem-emoji">{p.emoji}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
