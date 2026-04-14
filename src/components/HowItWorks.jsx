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
        и добавьте его в нужный групповой чат.
      </>
    ),
  },
  {
    num: '2',
    title: 'Саммари заработает сразу',
    text: 'Ежедневное саммари включается автоматически. Расшифровку голосовых можно включить отдельно. Все настройки — для каждого чата.',
  },
  {
    num: '3',
    title: 'Саммари приходит каждый день',
    text: 'Бот присылает в чат ежедневное саммари с темами обсуждений и ссылками на начало каждой ветки.',
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
