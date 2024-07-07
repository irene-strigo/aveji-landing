import logoHeader from './images/logoHeader.svg'
import email from './images/email.svg'
import whatsapp from './images/whatsapp.svg'
import telegram from './images/telegram.svg'
import './header.css'



function Header() {
  return (
    <div className="header-container">
      <a href="/"><img className="header-logo" src={logoHeader} alt='logo'></img></a>
      <div className="header-menu">
        <a className='header-menu-item' href="/About">О{'\u00A0'}нас</a>
        <a className='header-menu-item' href="/Materials">Материалы</a>
        <a className='header-menu-item' href="/Gallery">Наши{'\u00A0'}проекты</a>
        <a className='header-menu-item' href="/Feedback">Отзывы</a>
        <a className='header-menu-item' href="/Form">Оставить{'\u00A0'}заявку</a>
      </div>
      < div className="header-contacts">
        <a className='header-contacts-item' href='/Form'><img className='header-icon' src={email} alt='email'></img></a>
        <a className='header-contacts-item' href='/Form'><img className='header-icon' src={whatsapp} alt='whatsapp'></img></a>
        <a className='header-contacts-item' href='/Form'><img className='header-icon' src={telegram} alt='telegram'></img></a>

      </div>
    </div>

  )
}
export default Header