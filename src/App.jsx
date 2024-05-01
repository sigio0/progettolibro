import logo from './logo.svg';
import './App.css';
import MyNavBar from './Components/MyNavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from './Components/MyFooter';
import AllTheBooks from './Components/AllTheBooks';
import MyAlert from './Components/MyAlert';
import SingleBook from './Components/SingleBook';
import horror from './data/horror.json'
import { Container, Row } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <MyFooter/>
      <MyAlert/>
      <Container>
        <Row className="justify-content-center g-4 ">
      <AllTheBooks horror={horror}/>
      </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
