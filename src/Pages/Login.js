import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import Header from '../component/Header/Header';
import '../styles/Main_styles.css';
import L1 from '../Images/login.jpg'; 
function Login(){
    return(
        <Container fluid>
        
        <Container className='login-area'>
            <div className='img-lg'><img src={L1}/></div>
            <Form className='login-form'>
            <Form.Group className="mb-3" controlId="Username">
                <h2>Đăng nhập</h2>
                <Form.Label>Tài khoản</Form.Label>
                <Form.Control type="text" placeholder="Nhập tên tài khoản..." />
                <Form.Text className="text-muted">
                {/* We'll never share your email with anyone else. */}
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
                Đăng Nhập
            </Button>
        </Form> 
        </Container>
       </Container>
    );
}

export default Login;