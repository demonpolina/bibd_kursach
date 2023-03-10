import React, { useContext } from 'react';
import { Context } from '..';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '../utils/consts';
import { observer } from 'mobx-react-lite';

const adminNavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const { comics } = useContext(Context);
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setRole(false);
    localStorage.removeItem('token');
    navigate(LOGIN_ROUTE);
  };
  console.log(user.isAuth);


  
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink className={'nav_main'} to={SHOP_ROUTE}>
          Bulochki
        </NavLink>

        {user.isAuth ? (
          <div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {/* <Nav
                className="me-auto my-3 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav> */}
              <ion-icon
                name="bag-outline"
                size="large"
                style={{ padding: 10, cursor: 'pointer' }}
                onClick={() => navigate(BASKET_ROUTE)}
              ></ion-icon>
              <Form className="d-flex">
                <FormControl
                  value={comics.searchNameOfComics}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    comics.setSearchNameOfComics(e.target.value);
                  }}
                />
                <Button variant="outline-success" className="me-2 ">
                  Search
                </Button>

                <Button
                  variant="outline-success"
                  className="me-2"
                  onClick={() => navigate(ADMIN_ROUTE)}
                >
                  ?????????? ????????????
                </Button>

                <Button
                  variant={'outline-success'}
                  className="me-2"
                  onClick={() => {
                    logOut();
                  }}
                >
                  ??????????
                </Button>
              </Form>
            </Navbar.Collapse>
          </div>
        ) : (
          <div>
            <Navbar.Collapse id="navbarScroll">
              {/* <Nav
                className="mr-auto my-3 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav> */}

              <Form className="d-flex">
                <FormControl
                  value={comics.searchNameOfComics}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    comics.setSearchNameOfComics(e.target.value);
                  }}
                />
                <Button variant="outline-success" className="me-2">
                  Search
                </Button>
              </Form>
              <Button
                variant={'outline-success'}
                className="me-2"
                onClick={() => {
                  navigate(LOGIN_ROUTE);
                }}
              >
                ??????????
              </Button>
              <Button
                variant={'outline-success'}
                onClick={() => {
                  navigate(REGISTRATION_ROUTE);
                }}
              >
                ??????????????????????
              </Button>
            </Navbar.Collapse>
          </div>
        )}
      </Container>
    </Navbar>
  );
});

export default adminNavBar;
