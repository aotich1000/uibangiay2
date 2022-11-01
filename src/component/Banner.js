import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import b1 from '../Images/banner_1.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner(){
    return(
        <Container>
        <div className='banner-area'>
        <Row className='banner-content'>
          <Col className='banner-item'>
            <img
              className="d-block"
              src={b1}
              alt="Third slide"
            />
          </Col>
          <Col className='banner-item'>
          <img
              className="d-block"
              src={b1}
              alt="Third slide"
            />
          </Col>
          <Col className='banner-item'>
          <img
              className="d-block"
              src={b1}
              alt="Third slide"
            />
          </Col>
        </Row>
      </div>
      </Container>
    );
}

export default Banner;