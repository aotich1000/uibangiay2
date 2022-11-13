import { Breadcrumb, Button, Container, Form, ToggleButton } from "react-bootstrap";
import Card_product from "../component/Card_product";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";


function ListProduct() {

    const [checked, setChecked] = useState(false);

    return (
        <Container>
            <Breadcrumb className="dieu_huong">
                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item>Danh mục</Breadcrumb.Item>
                <Breadcrumb.Item>Nam</Breadcrumb.Item>
            </Breadcrumb>
            <div className="List-container">
            <div className="tim-kiem-nang-cao">
                <h2>Bộ lọc tìm kiếm </h2>
                <div className="content-tknc">
                    <Form>
                        <Form.Group>
                        <Form.Label>Theo danh mục</Form.Label>
                        <Form.Check id='danhmuc-nc' label='Nam' />
                        <Form.Check id='danhmuc-nc' label='Nữ' />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>
            <div className="content-list-product">
                <div className="noi-dung-tim-kiem">
                    Từ khóa tìm kiếm là : Nam
                </div>
                <div className="ListItem-content">
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                    <div className="ListItem"><Card_product /></div>
                </div>
                <div className="Pagination">
                    <Button variant="outline-primary"><BsChevronLeft/></Button>
                    <ToggleButton variant="outline-primary"  id="toggle-check" type="checkbox" checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)}>1</ToggleButton>
                    <Button variant="outline-primary">2</Button>
                    <Button variant="outline-primary">3</Button>
                    <Button variant="outline-primary">4</Button>
                    <Button variant="outline-primary">5</Button>
                    <Button variant="outline-primary">6</Button>
                    <Button variant="outline-primary">7</Button>
                    <Button variant="outline-primary">8</Button>
                    <Button variant="outline-primary">9</Button>
                    <Button variant="outline-primary"><BsChevronRight/></Button>
                </div>
            </div>
            
            </div>
        </Container>
    );
}

export default ListProduct;