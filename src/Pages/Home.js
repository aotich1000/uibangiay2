
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Banner from '../component/Banner';
import NewProduct from '../component/New_Product';
import Header from '../component/Header/Header';
import Slider from '../component/Slider';
import '../styles/Main_styles.css';
import Footer from '../component/Footer/Footer';
import ForMale from '../component/For_Male';
function Home() {
  return (
    <Container fluid>
      <Slider/>
      <Banner/>
      <NewProduct/>
      <ForMale/>
    </Container>
  );
}

export default Home;