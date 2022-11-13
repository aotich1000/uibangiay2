import { useState } from "react";
import { Breadcrumb, Button, Container, Form, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';


function UserManager() {

    const [state, setState] = useState(default_infoUser);

    function default_infoUser() {
        return (
            <div className="conten-tttk">
                <h3>Thông tin tài khoản</h3>
                <p> Tên : abcd </p>
                <p> Tài khoản: abc***xy@gmail.com </p>
                <p> Địa chỉ: 1bcsasd </p>
                <p>Điện thoại: asdbjsj </p>
                <Button className="btn-mn-u" onClick={suaTT}>Sửa thông tin</Button>
                <Button className="btn-mn-u">Đổi mật khẩu</Button>
            </div>
        );
    }

    function suaTT() {
        setState(
            <Form>
                <h3>Thông tin tài khoản</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }

    function rd_infoUser() {
        setState(
            default_infoUser
        );
    }

    function rd_form_infoUser() {
        setState(
            <div className="conten-tttk">
                <h3>Hóa đơn đã mua</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }

    return (
        <Container className="qltk">
            <Breadcrumb className="dieu_huong">
                <Breadcrumb.Item href="#">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Quản lý tài khoản</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Thông tin tài khoản</Breadcrumb.Item>
            </Breadcrumb>
            <div className="container-mnu">
                <div className="left-menu">
                    <div className="User-title" >
                        <img src="http://localhost:3000/static/media/card.7c6152e0fed68a997aaa.jpg" />
                        Xin chào, Customer
                    </div>
                    <ul>
                        <li onClick={rd_infoUser}> <Link to='#'>Thông tin tài khoản </Link></li>
                        <li onClick={rd_form_infoUser}> <Link to='#'>Hóa đơn đã mua </Link></li>
                        <li> <Link to='#'>Đăng xuất </Link></li>
                    </ul>
                </div>
                <div className="content-mnu">
                    {state}
                </div>
            </div>
        </Container>
    );
}

export default UserManager;