import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button } from 'react-bootstrap';
import Header from '../component/Header/Header';
import '../styles/Main_styles.css';
import L1 from '../Images/login.jpg'; 
import React,{ useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";

function Login(){
    const navigate = useNavigate();
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
      });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();
    
        const data = {
          email: loginInput.email,
          password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
              if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Success", res.data.message, "success");
                if (res.data.role === 'admin') {
                  navigate('/admin/dashboard');
                }
                else {
                  navigate('/');
                }
              }
              else if (res.data.status === 401) {
                swal("Warning", res.data.message, "warning");
              }
              else {
                setLogin({ ...loginInput, error_list: res.data.validation_errors });
              }
            });
          });
        }
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