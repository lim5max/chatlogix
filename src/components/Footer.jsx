import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          ChatLogix — главное из ваших чатов
        </div>
        <div className="footer-links">
          <a href="https://t.me/ChatLogixBot" target="_blank" rel="noopener">Telegram</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  )
}
