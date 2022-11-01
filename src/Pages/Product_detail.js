import { Breadcrumb, Button, Col, Container, Form, Row } from "react-bootstrap";
import P1 from "../Images/product_1.png";
import { MdAddShoppingCart } from "react-icons/md";
import { CgMathPlus } from "react-icons/cg";
function Product_detail(){
    return(
        <Container className="detailProduct">
            <Breadcrumb>
            </Breadcrumb>
            <Row className="DP-Content">
               <Col sm={6} className="big-img">
                <img className="d-block w-100" src={P1} alt="abc"></img>
                </Col>
                <Col sm={6} className="DP-detail">
                    <div className="DP-NameP">
                        <h2>Sản phẩm A - Giày A - Cở A - Abcxyz</h2>
                    </div>
                    <div className="DP_price">
                        <p>Giá : 350.000 đ</p>
                    </div>
                    <div className="Dp-status">
                       <p> Tình trạng : Còn hàng </p>
                    </div>
                    <div className="DP-size">
                        <p> Size:  </p>
                        <Button className="size-select" id="size-select">31</Button>
                        <Button className="size-select">31</Button>
                        <Button className="size-select">31</Button>
                        <Button className="size-select">31</Button>
                        <Button className="size-select">31</Button>
                    </div>
                    <div className="select-amount">
                        Số lượng
                        <Form.Control type="number" id="sl-sanpham" className="re-size-input" min={1}/>
                    </div>
                    <div className="btn-add-cart">
                        <Button><MdAddShoppingCart className="ico-add-cart"/>  Thêm vào giỏ hàng </Button>
                    </div>
                </Col>
            </Row> 
            <Row className="Dp-mota">
                        <h3>Mô tả sản phẩm</h3>
                        <p>-abcxyz</p>
            </Row>           
        </Container>
    );
}

export default Product_detail;