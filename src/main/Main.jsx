import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from "./Banner"
import About from "./About"
import Process from "./Process"
import Materials from "./Materials"
import Gallery from "./Gallery"
import Feedback from "./Feedback"
import Form from "../form/Form";
import './main.css'

function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Banner />} />
          <Route path="About" element={<About />} />
          <Route path="Process" element={< Process />} />
          <Route path="Materials" element={<Materials />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Feedback" element={< Feedback />} />
          <Route path="Form" element={< Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Main