import feedbackPicture1 from './images/feedbackPicture1.png'
import feedbackPicture2 from './images/feedbackPicture2.png'
import feedbackPicture3 from './images/feedbackPicture3.png'
import feedbackPicture4 from './images/feedbackPicture4.png'

function Feedback() {
    return (
        <div className='feedback-container'>
            <h2 className="heading about-text-heading">Отзывы</h2>
            <div className='cards-container'>
                <figure className='feedback-cards'>
                    <p><img src={feedbackPicture1} alt="Скульптура" /></p>
                    <figcaption >Кухня получилась, как я задумывала. Цвет великолепен! Долго искала в интернете подходящий вариант и никак не могла определиться, чего именно я хочу. В итоге пришла в Aveji и мы создали кухню моей мечты! <p>Елена</p></figcaption>
                </figure>
                <figure className='feedback-cards'>
                    <p><img src={feedbackPicture2} alt="Скульптура" /></p>
                    <figcaption>Заказывал журнальные столики из массива дерева. Очень доволен результатом. Изготовили качественно и в срок <p>Максим</p></figcaption>
                </figure>
                <figure className='feedback-cards'>
                    <p><img src={feedbackPicture3} alt="Скульптура" /></p>
                    <figcaption >Гардеробная получилась супер функциональной и очень стильной. Планирую заказать теперь мебель для гостиной <p>Екатерина Иванова</p></figcaption>
                </figure>
                <figure className='feedback-cards'>
                    <p><img src={feedbackPicture4} alt="Скульптура" /></p>
                    <figcaption >Заказывала письменный стол для дочки. Готовые варианты не подходили по размерам. Хочу сказать спасибо всей команде! Очень слаженная работа от чертежа до монтажа. <p>Александра</p></figcaption>
                </figure>
            </div>
        </div>
    )
}

export default Feedback