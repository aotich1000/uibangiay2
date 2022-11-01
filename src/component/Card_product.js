import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import c1 from '../Images/card.jpg';
import { BsPlusCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Card_product() {
  return (
    
    <Card className='card-product'>
      <Card.Img variant="top" src={c1} />
      <Card.Body>
        <Card.Title><Link to={'dp'}>Adios Cat</Link></Card.Title>
        <Card.Text>
          12.000.000 đ
        </Card.Text>
        <Button variant="primary"><BsPlusCircle/> Buy Now</Button>
        <Button variant="primary"><BsPlusCircle/> Add Cart</Button>
      </Card.Body>
    </Card>
   
  );
}

export default Card_product;