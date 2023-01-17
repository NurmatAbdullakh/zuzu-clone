import './App.css';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Contacts/>
      </main>
      <Footer />

    </div>
  );
}

export default App;
