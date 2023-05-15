import { navTerm, setTerm } from "../states/navState";
import { appTheme, themeToDark, themeToLight } from "../states/appState";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";

function Navigation() {
  const dispatch = useDispatch();
  const theme = useSelector(appTheme)
  const term = useSelector(navTerm);
  const [checked, setChecked] = useState(true)
  const [toggleButtonText, setToggleButtonText] = useState('Light')
  const [toggleButtonVariant, setToggleButtonVariant] = useState('primary')

  const toggleChecked = () => {
    setChecked(!checked)
    if (checked) {
      setToggleButtonText('Light')
      setToggleButtonVariant('primary')
      dispatch(themeToLight())
    } else {
      setToggleButtonText('Dark')
      setToggleButtonVariant('secondary')
      dispatch(themeToDark())
    }
  }

  return (
    <Navbar bg={theme} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Epi Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="m-2">
              Home
            </Link>
            <Link to="/login" className="m-2">
              Login
            </Link>
            <input
              type="text"
              placeholder="Cerca"
              value={term}
              onChange={(e) => {
                dispatch(setTerm(e.target.value));
              }}
            />
            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant={toggleButtonVariant}
              checked={checked}
              value="1"
              className="ms-3"
              onClick={toggleChecked}
            >
              {toggleButtonText}
            </ToggleButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
