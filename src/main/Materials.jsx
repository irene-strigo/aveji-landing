import stone from './images/stone.png'
import concrete from './images/concrete.png'
import metal from './images/metal.png'
import resin from './images/resin.png'
import glass from './images/glass.png'
import wood from './images/wood.png'
function Materials() {
    return (
        <div className="materials-container">
            <h2 className="heading about-text-heading">Материалы</h2>
            <div className='materials-content'>
                <div className="materials-text">Более 1000 материалов и фактур для самых смелых идей </div>
                <div className="materials-pictures">
                    <img className='materials-item' src={wood} alt='wood'></img>
                    <img className='materials-item' src={concrete} alt='concrete'></img>
                    <img className='materials-item' src={metal} alt='metal'></img>
                    <img className='materials-item' src={resin} alt='resin'></img>
                    <img className='materials-item' src={glass} alt='glass'></img>
                    <img className='materials-item' src={stone} alt='stone'></img>
                </div>
            </div>
        </div>
    )
}
export default Materials