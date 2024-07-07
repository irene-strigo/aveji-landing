import React from 'react'
import appStoreIcon from './images/appStoreIcon.svg'
import googlePlayIcon from './images/googlePlayIcon.svg'
import './form.css'


function Form() {


  return (
    <div className='footer-container'>
      <div className='footer-text-field'>
        <h2 className="heading about-text-heading">Связаться с нами</h2>
        <div className='footer-text'>
          Для консультации с&nbsp;нашим специалистом просто заполните форму и&nbsp;мы&nbsp;свяжемся
        </div>
        <div className='footer-links'>
          <a className='form-link' herf='https://www.apple.com/app-store/'><img className='footer-link-img' src={appStoreIcon} alt='appStore'></img></a>
          <a className='form-link' herf='https://x.com/GooglePlay?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><img className='footer-link-img' src={googlePlayIcon} alt='googlePlay'></img></a>
        </div>
      </div>
      <div className='form-container'>
        <form className='form'>
          <input className='form-input' type="text" name="name" placeholder='Имя' /><br />
          <input className='form-input' type="text" name="phone" placeholder='Ваш номер телефона' /><br />
          <input className='form-input' type="text" name="email" placeholder='Email' /><br />
          <input className='form-input banner-btn form-btn' type="submit" value="Отправить" />
        </form>
      </div>
    </div>
  )
}
export default Form