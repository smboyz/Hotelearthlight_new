import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import('preline');
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Homepage from './pages/home/Homepage'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import Services from './pages/services/Services';
import Feature from './pages/features/Feature';
import Rooms from './pages/rooms&suites/Rooms';
import RoomDetails from './pages/rooms&suites/RoomDetails';
import GoToTopButton from './components/GoToTopButton';
import ImageGallery from './pages/gallery/ImageGallery';
import VideoGallery from './pages/gallery/VideoGallery';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Services' element={<Services />} />
          <Route exact path='/Feature' element={<Feature />} />
          <Route exact path='/Rooms' element={<Rooms />} />
          <Route exact path='/Rooms/:roomType' element={<RoomDetails />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/ImageGallery' element={<ImageGallery />} />
          <Route exact path='/VideoGallery' element={<VideoGallery />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <GoToTopButton />
      </Router>
    </>
  )
}

export default App
