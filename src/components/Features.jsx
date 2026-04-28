import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Features.css'

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
)

const chatTabs = [
  {
    id: 'work',
    label: 'Рабочий чат',
    before: [
      { name: 'Алексей', cls: 'n1', text: 'Давайте перенесём дедлайн' },
      { name: 'Марина', cls: 'n2', text: 'Нет, заказчик не согласится' },
      { name: 'Дима', cls: 'n3', text: 'А если частями сдадим?' },
      { name: 'Алексей', cls: 'n1', text: 'Хм, можно попробовать' },
      { name: 'Марина', cls: 'n2', text: 'Ок давайте так и сделаем' },
      { name: 'Дима', cls: 'n3', text: '👍' },
      { name: 'Алексей', cls: 'n1', text: 'Кто напишет клиенту?' },
      { name: 'Марина', cls: 'n2', text: 'Я напишу' },
    ],
    moreCount: '100+',
    unread: 127,
    lastMsg: { name: 'Дима', cls: 'n3', text: 'Ок, тогда я готовлю первый пакет' },
    summary: {
      topics: [
        { icon: '📌', text: 'Дедлайн: сдают частями, чтобы не сдвигать сроки', cnt: '8 сообщ' },
        { icon: '👤', text: 'Ответственный: Дима готовит первый пакет', cnt: '3 сообщ' },
        { icon: '✅', text: 'Статус: согласовано всей командой', cnt: '5 сообщ' },
      ],
      link: 'Бриф проекта — Google Docs',
    },
  },
  {
    id: 'jk',
    label: 'ЖК «Солнечный»',
    before: [
      { name: 'Ольга', cls: 'n2', text: 'Завтра опять воду отключают?' },
      { name: 'Сергей', cls: 'n1', text: 'Да, с 10 до 18, корпус 2' },
      { name: 'Ольга', cls: 'n2', text: 'А лифт когда починят?' },
      { name: 'Андрей', cls: 'n3', text: 'УК обещали к пятнице' },
      { name: 'Сергей', cls: 'n1', text: 'Собрание когда?' },
      { name: 'Андрей', cls: 'n3', text: 'Перенесли на субботу 14:00' },
      { name: 'Ольга', cls: 'n2', text: 'Опять парковку перекроют...' },
      { name: 'Сергей', cls: 'n1', text: 'Да, ремонт у 3-го подъезда' },
    ],
    moreCount: '80+',
    unread: 94,
    lastMsg: { name: 'Андрей', cls: 'n3', text: 'Инфо от УК скинул в закреп' },
    summary: {
      topics: [
        { icon: '🔧', text: 'Вода: отключение в корпусе 2, с 10:00 до 18:00', cnt: '12 сообщ' },
        { icon: '🛗', text: 'Лифт: ремонт до пятницы, заявка в УК подана', cnt: '6 сообщ' },
        { icon: '📅', text: 'Собрание жильцов: суббота, 14:00', cnt: '9 сообщ' },
      ],
      link: 'Протокол собрания — Google Docs',
    },
  },
  {
    id: 'clients',
    label: 'Клиенты',
    before: [
      { name: 'Настя', cls: 'n2', text: 'Клиент «Альфа» просит скидку 15%' },
      { name: 'Игорь', cls: 'n1', text: 'У них объём большой, можно дать 10%' },
      { name: 'Лена', cls: 'n3', text: 'А договор уже подписали?' },
      { name: 'Игорь', cls: 'n1', text: 'Нет, ждём согласования юристов' },
      { name: 'Настя', cls: 'n2', text: 'Юристы вернут к среде' },
      { name: 'Лена', cls: 'n3', text: 'Тогда отправку сдвигаем' },
      { name: 'Игорь', cls: 'n1', text: 'Ок, я предупрежу склад' },
      { name: 'Настя', cls: 'n2', text: 'Давайте, спасибо' },
    ],
    moreCount: '60+',
    unread: 73,
    lastMsg: { name: 'Игорь', cls: 'n1', text: 'Склад в курсе, ждём юристов' },
    summary: {
      topics: [
        { icon: '💰', text: 'Скидка «Альфа»: согласовали 10% при большом объёме', cnt: '7 сообщ' },
        { icon: '📄', text: 'Договор: на согласовании у юристов, ответ к среде', cnt: '4 сообщ' },
        { icon: '📦', text: 'Отправка: сдвигается до подписания договора', cnt: '5 сообщ' },
      ],
      link: 'Карточка клиента — CRM',
    },
  },
]

export default function Features() {
  const ref = useReveal()
  const [activeTab, setActiveTab] = useState('work')
  const chat = chatTabs.find(t => t.id === activeTab)

  return (
    <section className="features" id="features" ref={ref}>
      {/* ── Summary ── */}
      <div className="feat">
        <div className="col">
          <div className="feat-tag r">Саммари</div>
          <h2 className="sec-title r d1">Суть за 30 секунд<br />вместо 30 минут</h2>
          <p className="sec-sub r d2">
            AI читает обсуждение и выдаёт структурированное саммари: темы, решения, ссылки.
          </p>

          <div className="chat-tabs r d3">
            {chatTabs.map(t => (
              <button
                key={t.id}
                className={`chat-tab${activeTab === t.id ? ' active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="feat-mock r d3">
            <div className="mock-ba">
              <div className="mock-before">
                <div className="mock-label">До</div>
                {chat.before.map((m, i) => (
                  <div key={i} className={`mock-msg ${i % 3 === 0 ? 'm1' : i % 3 === 1 ? 'm2' : 'm3'}`}>
                    <span className={`mock-name ${m.cls}`}>{m.name}</span> {m.text}
                  </div>
                ))}
                <div className="mock-more">↓ ещё {chat.moreCount} сообщений</div>
              </div>
              <div className="mock-arrow">→</div>
              <div className="mock-after">
                <div className="mock-label">После</div>
                <div className="mock-unread">💬 {chat.unread} сообщений</div>
                <div className={`mock-msg m3`}>
                  <span className={`mock-name ${chat.lastMsg.cls}`}>{chat.lastMsg.name}</span> {chat.lastMsg.text}
                </div>
                <div className="mock-summary-card">
                  <div className="msc-head">📋 Саммари от ChatLogix</div>
                  {chat.summary.topics.map((t, i) => (
                    <div key={i} className="msc-topic">{t.icon} {t.text} <span className="msc-cnt">({t.cnt})</span></div>
                  ))}
                  <div className="msc-link">🔗 {chat.summary.link}</div>
                </div>
              </div>
            </div>
          </div>

          <ul className="feat-checks-h r d4">
            <li><Check /> AI-саммаризация</li>
            <li><Check /> Ссылки и упоминания</li>
            <li><Check /> Команда /summary</li>
          </ul>
        </div>
      </div>

      {/* ── Voice ── */}
      <div className="feat">
        <div className="col">
          <div className="feat-tag r">Голосовые</div>
          <h2 className="sec-title r d1">Голосовые, которые<br />можно прочитать</h2>
          <p className="sec-sub r d2">
            Бот расшифровывает голосовые в текст автоматически. Не нужно слушать.
          </p>

          <div className="feat-mock r d3">
            <div className="mock-voice">
              <div className="mock-voice-before">
                <div className="mock-label">Чат</div>
                <div className="vmsg-text"><span className="vmsg-name n2">Марина</span><span className="vmsg-txt">Ребят, клиент просит апдейт по срокам</span></div>
                <div className="vmsg"><span className="vmsg-name n3">Дима</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">1:23</span></div></div>
                <div className="vmsg-text"><span className="vmsg-name n1">Алексей</span><span className="vmsg-txt">Я могу закрыть бэкенд до четверга</span></div>
                <div className="vmsg"><span className="vmsg-name n2">Марина</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">0:47</span></div></div>
                <div className="vmsg-text"><span className="vmsg-name n3">Дима</span><span className="vmsg-txt">Ок, тогда фронт подтяну в пятницу</span></div>
              </div>
              <div className="mock-arrow">→</div>
              <div className="mock-voice-after">
                <div className="mock-label">Результат</div>
                <div className="vmsg-text"><span className="vmsg-name n2">Марина</span><span className="vmsg-txt">Ребят, клиент просит апдейт по срокам</span></div>
                <div className="vmsg"><span className="vmsg-name n3">Дима</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">1:23</span></div></div>
                <div className="voice-text-card">
                  <div className="vtc-head">📝 ChatLogix — Расшифровка</div>
                  <div className="vtc-body">Я поговорил с дизайнером, макеты будут готовы к среде. Если бэкенд закроют до четверга, мы успеваем собрать демо для клиента в пятницу.</div>
                </div>
                <div className="vtc-badge">Попадёт в ежедневное саммари</div>
              </div>
            </div>
          </div>

          <ul className="feat-checks-h r d4">
            <li><Check /> Автоматическая расшифровка</li>
            <li><Check /> Длинные аудио</li>
            <li><Check /> Точность 99%</li>
          </ul>
        </div>
      </div>

      {/* ── Antispam ── */}
      <div className="feat">
        <div className="col">
          <div className="feat-tag r">Антиспам</div>
          <h2 className="sec-title r d1">Чистый чат.<br />Без вашего участия.</h2>
          <p className="sec-sub r d2">
            Бот удаляет спам, флуд и мат автоматически. Умный слоу-мод гасит конфликты до эскалации.
          </p>

          <div className="feat-mock r d3">
            <div className="mock-ba">
              <div className="mock-before as-before">
                <div className="mock-label">Чат без защиты</div>
                <div className="mock-msg as-spam"><span className="mock-name as-n-spam">spam_bot_92</span> Заработок от 5000$ в день! Переходи...</div>
                <div className="mock-msg m1"><span className="mock-name n1">Алексей</span> Когда созвон по проекту?</div>
                <div className="mock-msg as-spam"><span className="mock-name as-n-spam">crypto_guru</span> Бесплатные сигналы в канале!</div>
                <div className="mock-msg as-toxic"><span className="mock-name as-n-toxic">troll_228</span> Вы все тут д***ы, ничего не понимаете</div>
                <div className="mock-msg m2"><span className="mock-name n2">Марина</span> Алексей, в 15:00</div>
                <div className="mock-msg m3"><span className="mock-name n3">flood_user</span> ааааааааааааа</div>
                <div className="mock-msg m3"><span className="mock-name n3">flood_user</span> ааааааааааааа</div>
                <div className="mock-msg m3"><span className="mock-name n3">flood_user</span> ааааааааааааа</div>
                <div className="as-chaos-label">...и так каждый день</div>
              </div>
              <div className="mock-arrow">→</div>
              <div className="mock-after as-after">
                <div className="mock-label">С антиспамом</div>
                <div className="mock-msg m1"><span className="mock-name n1">Алексей</span> Когда созвон по проекту?</div>
                <div className="mock-msg m2"><span className="mock-name n2">Марина</span> Алексей, в 15:00</div>
                <div className="mock-msg m3"><span className="mock-name n3">Дима</span> Ок, буду. Скиньте ссылку на Zoom</div>
                <div className="mock-msg m1"><span className="mock-name n1">Алексей</span> Отправил в личку</div>
                <div className="mock-msg m2"><span className="mock-name n2">Марина</span> Подготовлю презу к созвону</div>
                <div className="as-bot-log">
                  <div className="as-log-head">🛡 ChatLogix — Модерация</div>
                  <div className="as-log-line"><span className="as-del">Удалено</span> 2 спам-сообщения</div>
                  <div className="as-log-line"><span className="as-del">Удалено</span> мат с обходом символов</div>
                  <div className="as-log-line"><span className="as-mute">Ограничен</span> flood_user — флуд</div>
                  <div className="as-log-line"><span className="as-ban">Забанен</span> spam_bot_92 — бот</div>
                </div>
              </div>
            </div>
          </div>

          <ul className="feat-checks-h r d4">
            <li><Check /> Работает автоматически</li>
            <li><Check /> Настройка в мини-аппе</li>
            <li><Check /> Ежедневный дайджест</li>
          </ul>
        </div>
      </div>

      {/* ── Super Summary ── */}
      <div className="feat">
        <div className="col">
          <div className="feat-tag r">Super Summary</div>
          <h2 className="sec-title r d1">Один дайджест.<br />Все чаты. Каждое утро.</h2>
          <p className="sec-sub r d2">
            Ежедневная сводка по всем чатам — в личные сообщения. Одно вместо десятков.
          </p>

          <div className="feat-mock r d3">
            <div className="mock-digest">
              <div className="digest-head">☀️ Утренний дайджест</div>
              <div className="digest-chat">
                <span className="digest-dot" style={{ background: 'var(--blue)' }} />
                <div>
                  <div className="digest-name">Product Team</div>
                  <div className="digest-topic">— Обсудили роадмап Q3, приоритет — мобильное приложение <span className="digest-cnt">(12 сообщ)</span></div>
                  <div className="digest-topic">— Баги в авторизации — нужен хотфикс до пятницы <span className="digest-cnt">(8 сообщ)</span></div>
                  <div className="digest-link">🔗 Роадмап Q3 — Notion</div>
                </div>
              </div>
              <div className="digest-chat">
                <span className="digest-dot" style={{ background: 'var(--green)' }} />
                <div>
                  <div className="digest-name">Design Chat</div>
                  <div className="digest-topic">— Финализировали UI Kit, пушат в Figma сегодня <span className="digest-cnt">(7 сообщ)</span></div>
                  <div className="digest-topic">— Разбор нового редизайна Spotify <span className="digest-cnt">(4 сообщ)</span></div>
                  <div className="digest-link">🔗 UI Kit — Figma</div>
                </div>
              </div>
              <div className="digest-chat">
                <span className="digest-dot" style={{ background: 'var(--violet)' }} />
                <div>
                  <div className="digest-name">Marketing</div>
                  <div className="digest-topic">— Запуск кампании перенесён на понедельник <span className="digest-cnt">(5 сообщ)</span></div>
                  <div className="digest-topic">— Утвердили бюджет на креативы Q2 <span className="digest-cnt">(3 сообщ)</span></div>
                  <div className="digest-link">🔗 Медиаплан — Google Sheets</div>
                </div>
              </div>
            </div>
          </div>

          <ul className="feat-checks-h r d4">
            <li><Check /> Все чаты в одном</li>
            <li><Check /> Приходит в личку</li>
            <li><Check /> Умная AI-саммаризация</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
