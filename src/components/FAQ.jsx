import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './FAQ.css'

const items = [
  {
    q: 'Как подключить бота?',
    a: (
      <>
        Откройте{' '}
        <a href="https://t.me/ChatLogixBot" target="_blank" rel="noopener">@ChatLogixBot</a>
        {' '}в Telegram, добавьте в нужный чат с правами админа и включите нужные функции прямо в боте. Расширенные настройки — в мини-аппе.
      </>
    ),
  },
  {
    q: 'Бот читает мои личные сообщения?',
    a: 'Нет. Бот видит только сообщения в групповых чатах, куда его добавили. Личные переписки он не читает и не имеет к ним доступа.',
  },
  {
    q: 'Это бесплатно?',
    a: 'Большинство функций доступно бесплатно: саммари, расшифровка голосовых, базовый антиспам. Расширенные возможности доступны по подписке. Chat Podcast и Super Podcast также доступны в пробном периоде.',
  },
  {
    q: 'Что такое Super Summary?',
    a: 'Ежедневный дайджест по всем вашим чатам — в личные сообщения. Одно сообщение утром вместо скролла десятков чатов.',
  },
  {
    q: 'Где настраивать бота?',
    a: 'Все настройки — в мини-аппе прямо в Telegram. Время саммари, фильтры антиспама, расшифровка голосовых, стоп-слова — всё в одном месте, без команд в чате.',
  },
  {
    q: 'Как работает антиспам?',
    a: 'Бот автоматически удаляет спам, флуд и нежелательные медиа. В Pro-режиме — умный фильтр мата с пониманием контекста и автоматический слоу-мод при росте токсичности в чате.',
  },
  {
    q: 'Что такое база знаний?',
    a: 'Бот индексирует историю чата и позволяет искать по ней через команду /search. Первые 10 000 сообщений — бесплатно, 100 запросов в месяц. Новые сообщения добавляются автоматически.',
  },
  {
    q: 'Хранит ли бот мои данные?',
    a: (
      <>
        Бот хранит сообщения чата для создания саммари и модерации. Подробнее — в{' '}
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
