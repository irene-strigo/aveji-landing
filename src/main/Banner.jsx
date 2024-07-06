
import logoMain from './images/logoMain.svg'
import bannerPicture from './images/banner-picture.jpg'
import discounts from './images/discounts.jpg'

function Banner() {

  return (
    <>
      <div className="banner-container" >
        <img className='banner-img' src={bannerPicture} />
        <div className='banner-items-box'>
          <div className='banner-items-container'>
            <img className="banner-logo" src={logoMain} alt='logo'></img>
            <div className="banner-slogan">Мы создаем мебель эксклюзивно для вас</div>
            <a className="banner-btn" href="/Form">Оставить заявку</a>
          </div>
        </div>
      </div>
      <div className='company-discounts'>
        <img className="discounts-background" src={discounts}></img>
        <div className='discounts-text'>на первый заказ скидка <span className='discount-span'>10%</span></div>
      </div>
    </>
  )
}
export default Banner