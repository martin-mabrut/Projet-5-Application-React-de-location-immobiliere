import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Logement from './pages/Logement/Logement';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

function App() {
  return (
    <>
      <div className="page">
        <div className="container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement/:id" element={<Logement />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
