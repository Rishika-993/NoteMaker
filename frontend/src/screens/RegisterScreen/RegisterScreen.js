import { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage';
// import axios from 'axios';
import Loading from '../../components/Loading';
import './RegisterScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const history = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      history('/mynotes'); // Redirect to MyNotes if user is already logged in
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      dispatch(register(name, email, password, pic));
    }
  }

  const picDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please select an image");
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Note Maker");
      data.append("cloud_name", "dbd4ideuq");
      fetch("https://api.cloudinary.com/v1_1/dbd4ideuq/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.secure_url) {
            setPic(data.secure_url.toString());
            setPicMessage(null);
          } else {
            setPicMessage("Image upload failed. Try again.");
          }
        })
        .catch((err) => {
          console.log(err);
          setPicMessage("Image upload failed, please try again.");
        });
    } else {
      return setPicMessage("Please select an image file (jpeg or png)");
    }
  }
  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="pic" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              onChange={(e) => picDetails(e.target.files[0])}
              type="file"
              accept="image/png, image/jpeg"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  )
}

export default RegisterScreen