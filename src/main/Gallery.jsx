import galleryFoto1 from './images/galleryFoto1.png'
import galleryFoto2 from './images/galleryFoto2.png'
import galleryFoto3 from './images/galleryFoto3.png'
import galleryFoto4 from './images/galleryFoto4.png'
import galleryFoto5 from './images/galleryFoto5.png'
import galleryFoto6 from './images/galleryFoto6.png'
import galleryFoto7 from './images/galleryFoto7.png'
function Gallery() {
    return (
        <div className="gallery-container">
            <h2 className="heading about-text-heading">Галерея наших работ</h2>
            <div className="foto-container">
                <img className='foto-item foto-item1' src={galleryFoto1} alt='interior'></img>
                <img className='foto-item foto-item2' src={galleryFoto2} alt='interior'></img>
                <img className='foto-item foto-item3' src={galleryFoto3} alt='interior'></img>
                <img className='foto-item foto-item4' src={galleryFoto4} alt='interior'></img>
                <img className='foto-item foto-item5' src={galleryFoto5} alt='interior'></img>
                <img className='foto-item foto-item6' src={galleryFoto6} alt='interior'></img>
                <img className='foto-item foto-item7' src={galleryFoto7} alt='interior'></img>
            </div>
        </div>
    )
}
export default Gallery