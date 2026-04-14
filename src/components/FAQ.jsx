import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './FAQ.css'

const items = [
  {
    q: 'Как подключить бота к чату?',
    a: (
      <>
        Откройте{' '}
        <a href="https://t.me/ChatLogixBot" target="_blank" rel="noopener">@ChatLogixBot</a>
        {' '}в Telegram, нажмите «Добавить бота» и выберите нужный чат. Бот заработает сразу.
      </>
    ),
  },
  {
    q: 'Бот читает мои личные сообщения?',
    a: 'Нет. Бот видит только сообщения в групповых чатах, куда его добавили. Личные переписки он не читает и не имеет к ним доступа.',
  },
  {
    q: 'Это бесплатно?',
    a: 'Да, базовые функции — саммари и расшифровка голосовых — бесплатны. Для больших чатов и расширенных возможностей есть платные тарифы.',
  },
  {
    q: 'Что такое Super Summary?',
    a: 'Это ежедневный дайджест по всем вашим чатам с ChatLogix. Приходит в личные сообщения бота — только вам. Одно сообщение утром вместо скролла десятков чатов.',
  },
  {
    q: 'Можно ли настроить саммари?',
    a: 'Да. Можно включить или выключить эмодзи, поменять заголовок сообщения (например, «Выжимка за сегодня» или «Саммари за 12.04»), задать свой хэштег, настроить время отправки и часовой пояс.',
  },
  {
    q: 'Хранит ли бот мои данные?',
    a: (
      <>
        Бот хранит сообщения чата для создания саммари. Подробнее о том, как мы обрабатываем данные, можно ознакомиться в{' '}
        <a href="#" target="_blank" rel="noopener">политике обработки данных</a>.
      </>
    ),
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const ref = useReveal()

  const toggle = i => setOpen(open === i ? null : i)

  return (
    <section className="faq" id="faq" ref={ref}>
      <div className="col">
        <h2 className="sec-title r">Частые вопросы</h2>

        <div className="faq-list">
          {items.map((item, i) => (
            <div className={`faq-item r d${Math.min(i + 1, 4)}`} key={i}>
              <button className="faq-q" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <svg
                  className={`faq-chev ${open === i ? 'open' : ''}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className={`faq-a ${open === i ? 'show' : ''}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
