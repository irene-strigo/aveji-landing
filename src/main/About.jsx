
import chairPicture from './images/chairPicture.png'
function About() {
  return (
    <div className="about-container">
      <img className='about-picture' src={chairPicture} alt='chair'></img>
      <div className='text-block'>
        <h2 className='about-text-heading heading'>О нас</h2>
        <p className='about-text-central'>Мы&nbsp;производим эксклюзивную и&nbsp;нестандартную мебель для дома. Реализуем самые смелые задумки качественно и&nbsp;аккуратно. Мы&nbsp;можем произвести любую мебель и&nbsp;наи&#774;ти&nbsp;производственное решение любои&#774; задумки.</p>
        <p className='about-text-end'>Приходите к&nbsp;нам с&nbsp;идеей и&nbsp;мы&nbsp;осуществим ее</p>
      </div>
    </div>
  )
}
export default About