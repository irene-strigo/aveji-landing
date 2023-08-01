import Banner from "./Banner"
import About from "./About"
import Process from "./Process"
import Materials from "./Materials"
import Gallery from "./Gallery"
import Feedback from "./Feedback"
import './main.css'
function Main() {
    return (
        <div className="main-container">
            <Banner />
            <About />
            <Process />
            <Materials />
            <Gallery />
            <Feedback />

        </div>
    )
}
export default Main