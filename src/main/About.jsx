
import chairPicture from './images/chairPicture.png'
function About() {
    return (
        <div className="about-container">
            <img className='about-picture' src={chairPicture} alt='chair'></img>
            <div className='text-block'>
                <h2 className='about-text-heading heading'>О нас</h2>
                <p className='about-text-central'>Мы производим эксклюзивную и нестандартную мебель<br></br>для дома. Реализуем самые смелые задумки качественно и аккуратно. Мы можем произвести любую мебель и найти производственное решение любой задумки. </p>
                <p className='about-text-end'>Приходите к нам с идеей и мы осуществим ее</p>
            </div>
        </div>
    )
}
export default About