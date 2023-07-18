
import logoMain from './images/logoMain.svg'
function Banner() {
    return (
        <div className="banner-container">
            <div className='banner-items-box'>
                <div className='banner-items-container'>
                    <img className="banner-logo" src={logoMain} alt='logo'></img>
                    <div className="banner-slogan">Мы создаем мебель эксклюзивно для вас</div>
                    <button className="banner-btn">Оставить заявку</button>
                </div></div>
        </div>
    )
}
export default Banner