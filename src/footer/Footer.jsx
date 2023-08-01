import appStoreIcon from './images/appStoreIcon.png'
import googlePlayIcon from './images/googlePlayIcon.png'
import './footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-text-field'>
                <h2 className="heading about-text-heading">Связаться с нами</h2>
                <div className='footer-text'>
                    Для консультации с нашим специалистом просто заполните форму и мы свяжемся
                </div>
                <div className='footer-links'>
                    <a herf='#'><img src={appStoreIcon} alt='appStore'></img></a>
                    <a herf='#'><img src={googlePlayIcon} alt='googlePlay'></img></a>
                </div>
            </div>
            <div className='footer-form-container'>
                <form>
                    <input className='form-input' type="text" name="name" placeholder='Имя' /><br />
                    <input className='form-input' type="text" name="phone" placeholder='Ваш номер телефона' /><br />
                    <input className='form-input' type="text" name="email" placeholder='Email' /><br />
                    <input className='form-input footer-btn' type="submit" value="Отправить" />
                </form>
            </div>
        </div>
    )
}
export default Footer