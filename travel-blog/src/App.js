import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import HomeBody from './home_body.jsx';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
        <NavBar/>
        <HomeBody/>
        <Footer/>
    </div>
  );
}

export default App;
