import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsPlusCircle } from "react-icons/bs";
import { MdFormatListNumbered } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import { NumericFormat } from 'react-number-format';



function Card_product(props) {

  // const [CardState,setCardState] = useState();

  return (
    <Card className='card-product'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title><Link to={'/product/dp'}>{props.name}</Link></Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button variant="primary"><BsPlusCircle/> Buy Now</Button>
        <Button variant="primary"><BsPlusCircle/> Add Cart</Button>
      </Card.Body>
    </Card>
   
  );
}

export default Card_product;