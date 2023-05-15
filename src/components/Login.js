import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useState } from "react"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [submit, setSubmit] = useState(false)
  const submitFunction = () => {
    if (username !== "" && password !== "") {
      setMessage("Autenticazione avvenuta con successo")
      setUsername('')
      setPassword('')
    } else {
      setMessage("Devi compilare entrambi i campi username e password")
    }
    setSubmit(true)
  };
  
  return (
    <>
      <Form className="p-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => {
          e.preventDefault()
          submitFunction()
          }
        }>
          Submit
        </Button>
      </Form>
      {submit &&
        <div>
          <p className="p-5 fs-3">{message}</p>
        </div>
      }
    </>
  );
};

export default Login
