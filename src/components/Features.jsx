import { useReveal } from '../hooks/useReveal'
import './Features.css'

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
)

export default function Features() {
  const ref = useReveal()

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

          <div className="feat-mock r d3">
            <div className="mock-ba">
              <div className="mock-before">
                <div className="mock-label">До</div>
                <div className="mock-msg m1"><span className="mock-name n1">Алексей</span> Давайте перенесём дедлайн</div>
                <div className="mock-msg m2"><span className="mock-name n2">Марина</span> Нет, заказчик не согласится</div>
                <div className="mock-msg m3"><span className="mock-name n3">Дима</span> А если частями сдадим?</div>
                <div className="mock-msg m1"><span className="mock-name n1">Алексей</span> Хм, можно попробовать</div>
                <div className="mock-msg m2"><span className="mock-name n2">Марина</span> Ок давайте так и сделаем</div>
                <div className="mock-msg m3"><span className="mock-name n3">Дима</span> 👍</div>
                <div className="mock-msg m1"><span className="mock-name n1">Алексей</span> Кто напишет клиенту?</div>
                <div className="mock-msg m2"><span className="mock-name n2">Марина</span> Я напишу</div>
                <div className="mock-more">↓ ещё 100+ сообщений</div>
              </div>
              <div className="mock-arrow">→</div>
              <div className="mock-after">
                <div className="mock-label">После</div>
                <div className="mock-unread">💬 127 сообщений</div>
                <div className="mock-msg m3"><span className="mock-name n3">Дима</span> Ок, тогда я готовлю первый пакет</div>
                <div className="mock-summary-card">
                  <div className="msc-head">📋 Саммари от ChatLogix</div>
                  <div className="msc-topic">📌 Дедлайн: сдают частями, чтобы не сдвигать сроки <span className="msc-cnt">(8 сообщ)</span></div>
                  <div className="msc-topic">👤 Ответственный: Дима готовит первый пакет <span className="msc-cnt">(3 сообщ)</span></div>
                  <div className="msc-topic">✅ Статус: согласовано всей командой <span className="msc-cnt">(5 сообщ)</span></div>
                  <div className="msc-link">🔗 Бриф проекта — Google Docs</div>
                </div>
              </div>
            </div>
          </div>

          <ul className="feat-checks-h r d4">
            <li><Check /> Темы и решения</li>
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
                <div className="vmsg"><span className="vmsg-name n2">Марина</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">0:42</span></div></div>
                <div className="vmsg"><span className="vmsg-name n3">Дима</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">3:15</span></div></div>
                <div className="vmsg"><span className="vmsg-name n1">Алексей</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">1:12</span></div></div>
                <div className="vmsg"><span className="vmsg-name n2">Марина</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">1:47</span></div></div>
                <div className="vmsg"><span className="vmsg-name n1">Алексей</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">4:02</span></div></div>
              </div>
              <div className="mock-arrow">→</div>
              <div className="mock-voice-after">
                <div className="mock-label">Результат</div>
                <div className="vmsg"><span className="vmsg-name n2">Марина</span><div className="vmsg-bar"><span className="vp">▶</span><span className="vw">{Array.from({length:40}).map((_,i)=><i key={i}/>)}</span><span className="vd">1:47</span></div></div>
                <div className="voice-text-card">
                  <div className="vtc-head">📝 ChatLogix — Расшифровка</div>
                  <div className="vtc-body">По итогам встречи — утвердили бюджет на Q2. Маркетинг получает +20%. Нужно до пятницы подготовить план расходов и согласовать с финансами.</div>
                </div>
              </div>
            </div>
          </div>

          <ul className="feat-checks-h r d4">
            <li><Check /> Автоматическая расшифровка</li>
            <li><Check /> Длинные аудио</li>
            <li><Check /> Точность Whisper</li>
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
            <li><Check /> Настраиваемое расписание</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
