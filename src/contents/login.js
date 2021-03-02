import React, {useState} from 'react'
import { Container, Image, Button, Form, Col } from 'react-bootstrap'
import LogoImage from '../assets/images/pavleuapp1.png'
import GoogleIcon from '../assets/images/icons/google.png'
import { signInWithGoogle, auth } from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const signInWithEmailAndPasswordHandler = 
    (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then( value => {
        }).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        });
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            setEmail(value);
        }
        else if(name === 'userPassword'){
            setPassword(value);
        }
    };
    
    return (
        <Container className="p-5 text-center">
            <div className="p-4">
                <Image src={LogoImage} width={150} fluid />
            </div>
            <div>
                <h2>
                    Sign in to Pavleu
                </h2>
            </div>
            <Col lg={5} md={8} className='m-auto p-3'>
                <Button variant="outline-primary" className="w-100" onClick={signInWithGoogle}>
                    <Image src={GoogleIcon} width={25} className="mx-2" fluid/>
                    Sign in with Google
                </Button>
                <hr></hr>
                {error !== null && <div className = "w-full text-danger text-center mb-3">{error}</div>}
                <Form className="my-3">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="float-left">Email:</Form.Label>
                        <Form.Control
                            type="email" placeholder="E.g: faruq123@gmail.com" value={email}
                            name="userEmail" onChange={(event) => onChangeHandler(event)}
                        />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="float-left">Password:</Form.Label>
                        <Form.Control
                            type="password" placeholder="Password" value={password}
                            name="userPassword" onChange={(event) => onChangeHandler(event)}
                        />
                    </Form.Group>
                    <Button
                        variant="primary" className="w-100"
                        onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
                    >
                        Sign in with Email
                    </Button>
                </Form>
            </Col>
        </Container>
    )
}

export default Login
