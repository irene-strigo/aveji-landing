import logoHeader from './images/logoHeader.svg'
import email from './images/email.svg'
import whatsapp from './images/whatsapp.svg'
import telegram from './images/telegram.svg'
import './header.css'
function Header() {
    return (
        <div className="header-container">
            <a href="#"><img className="header-logo" src={logoHeader} alt='logo'></img></a>
            <div className="header-menu">
                <a className='header-menu-item' href="#">О{'\u00A0'}нас</a>
                <a className='header-menu-item' href="#">Материалы</a>
                <a className='header-menu-item' href="#">Наши{'\u00A0'}проекты</a>
                <a className='header-menu-item' href="#">Отзывы</a>
            </div>
            <div className="header-contacts">
                <a className='header-contacts-item' href='#'><img src={email} alt='email'></img></a>
                <a className='header-contacts-item' href='#'><img src={whatsapp} alt='whatsapp'></img></a>
                <a className='header-contacts-item' href='#'><img src={telegram} alt='telegram'></img></a>
            </div>
        </div>
    )
}
export default Header