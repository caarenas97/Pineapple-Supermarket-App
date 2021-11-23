//import logo from '../logo.svg';
import '../App.css';
import Navbar from '../Components/Navbar';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Pineapple Supermarket</h1>

      </header>


        <div>
          <h2>Web Devs' Rockstars</h2>
          <h3>Integrantes:</h3>
          <div className="cont-team">
            <div className="member">
            <Card className="member-card" style={{ width: '18rem' }}>
                <Image src="https://avatars.githubusercontent.com/u/91690704?v=4" roundedCircle />
                <Card.Body>
                  <Card.Title>García Vélez Iraís Eréndira</Card.Title>
                  <a target="_blank" href="https://www.linkedin.com/in/erendira-garciav/"><i class="fab fa-linkedin"></i></a>
                </Card.Body>
              </Card>
            </div>
            <div className="member">
              <Card className="member-card" style={{ width: '18rem' }}>
                <Image src="https://avatars.githubusercontent.com/u/89095047?v=4" roundedCircle />
                <Card.Body>
                  <Card.Title>Roda López Melanie Elena</Card.Title>
                  <a target="_blank" href="https://www.linkedin.com/in/Melanie-RodasLo"><i class="fab fa-linkedin"></i></a>
                </Card.Body>
              </Card>
            </div>
            <div className="member">
              <Card className="member-card"style={{ width: '18rem' }}>
                <Image src="https://avatars.githubusercontent.com/u/75837291?v=4" roundedCircle />
                <Card.Body>
                  <Card.Title>Sanchez Correa Carla Patricia</Card.Title>
                  <a target="_blank" href="https://www.linkedin.com/in/carlasanchezcorrea/"><i class="fab fa-linkedin"></i></a>
                </Card.Body>
              </Card>
            </div>
            <div className="member">
              <Card className="member-card" style={{ width: '18rem' }}>
                <Image src="https://avatars.githubusercontent.com/u/53058216?v=4" roundedCircle />
                <Card.Body>
                  <Card.Title>Tello Huaripata Keyko Isabel</Card.Title>
                  <a target="_blank" href="https://www.linkedin.com/in/isabel-tello-huaripata/"><i class="fab fa-linkedin"></i></a>
                </Card.Body>
              </Card>
            </div>
            <div className="member">
              <Card className="member-card" style={{ width: '18rem' }}>
                <Image src="https://avatars.githubusercontent.com/u/34204871?v=4" roundedCircle />
                <Card.Body>
                  <Card.Title>Vargas Pérez Andrea</Card.Title>
                  <a target="_blank" href="https://www.linkedin.com/in/andrea-vargas-perez/"><i class="fab fa-linkedin"></i></a>
                </Card.Body>
              </Card>
            </div>
          </div>
          <h3>URL de Github:</h3>
        <a href="https://github.com/caarenas97/Pineapple-Supermarket-App"><i className="fab fa-github icon-github"></i></a>
        </div>


      <Footer/>

    </div>
  );
}
export default Home;
