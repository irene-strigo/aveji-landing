import logoHeader from '../header/images/logoHeader.svg'
import email from '../header/images/email.svg'
import whatsapp from '../header/images/whatsapp.svg'
import telegram from '../header/images/telegram.svg'
import './footer.css'



function Header() {
  return (
    <div className="footer">
      <a href="index.js"><img className="header-logo" src={logoHeader} alt='logo'></img></a>
      <p>2024</p>
      < div className="header-contacts">
        <a className='footer-contacts-item' href='/About'><img className='footer-contacts-item' src={email} alt='email'></img></a>
        <a className='footer-contacts-item' href='/About'><img className='footer-contacts-item' src={whatsapp} alt='whatsapp'></img></a>
        <a className='footer-contacts-item' href='/About'><img className='footer-contacts-item' src={telegram} alt='telegram'></img></a>

      </div>
    </div>

  )
}
export default Header