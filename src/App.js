import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (

    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={ <Contact/>} />
        </Routes>
        
      </main>
      <Footer />

    </div>
  );
}

export default App;
