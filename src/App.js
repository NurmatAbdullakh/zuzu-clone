import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <About/>
      </main>
      <Footer />

    </div>
  );
}

export default App;
