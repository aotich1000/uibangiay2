import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown_nav from './Dropdown_nav';
import { BsSearch } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='Header'>
            <div className='top-bar'>
                <div className='top-bar-items'>
                    <Link to='/login'>Đăng nhập</Link>
                    <Link to='/reg'>Đăng ký</Link>
                </div>
            </div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <div className='Header-logo'>
                        <Navbar.Brand><Link to='/'><b>Ss</b>Shop</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <div className='Header-menu'>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/">Home</Nav.Link>
                            <Dropdown_nav />
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                    <div className='Header-action'>
                        <div className='Header-action-items'>
                            <Form className='Search-area'>
                                <Form.Group className='form-input'>
                                    <span className='Search-ico'><BsSearch/></span>
                                    <input type="text" placeholder='Search...' className='form-input'></input>
                                </Form.Group>
                            </Form>
                            
                            </div>
                           
                        <div className='Header-action-items User-ico'>
                            <Link to="/user-mn" ><BsFillPersonFill className='ico-size' /></Link>
                        </div>
                        <div className='Header-action-items User-ico'>
                            <Link to="/"><BsCart2 className='ico-size'/></Link>
                            <div className='count-pro'>
                                10
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>);
}

export default Header;