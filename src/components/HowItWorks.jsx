import { useReveal } from '../hooks/useReveal'
import './HowItWorks.css'

const steps = [
  {
    num: '1',
    title: 'Добавьте бота в чат',
    text: (
      <>
        Откройте{' '}
        <a href="https://t.me/ChatLogixBot" target="_blank" rel="noopener">
          @ChatLogixBot
        </a>{' '}
        и добавьте его в нужный групповой чат с правами админа.
      </>
    ),
  },
  {
    num: '2',
    title: 'Настройте в мини-аппе',
    text: 'Саммари и расшифровка голосовых включаются автоматически. Антиспам, время отправки и другие фичи — настраиваются в мини-аппе прямо в Telegram.',
  },
  {
    num: '3',
    title: 'Бот работает за вас',
    text: 'Ежедневное саммари, расшифровки голосовых, защита от спама — всё приходит автоматически. Вы просто читаете итоги.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section className="how" id="how" ref={ref}>
      <div className="col">
        <div className="sec-label r">Как это работает</div>
        <h2 className="sec-title r d1">Три шага — и&nbsp;готово</h2>

        <div className="how-steps">
          {steps.map((s, i) => (
            <div className={`how-step r d${i + 1}`} key={s.num}>
              <div className="how-num">{s.num}</div>
              <div className="how-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
