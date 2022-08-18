import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/imgs/shopping-bag-icon.png'
function Navbar1() {
  return (
    <Navbar bg="white" expand="lg" className='fixed-top order-lg-0 py-4'>
      <Container>
        <Navbar.Brand href="#home">
            <div className='align-items-center'>
              <img className='brand-img me-2' src={logo} />
              <p className='title text-uppercase d-inline fw-normal'>attire</p>
            </div>
            </Navbar.Brand>
            
            <Nav className='order-lg-2 d-inline'>
            <button type='button' className='position-relative btn'>
              <i class="fa-solid fa-cart-shopping"></i>
              <span className='position-absolute top-0 start-100 
              translate-middle badge bg-danger'>5</span>
              </button>
              
              <button type='button' className='position-relative btn'>
              <i class="fa-solid fa-heart"></i>
              <span className='position-absolute top-0 start-100 
              translate-middle badge bg-danger'>3</span>
              </button>


              <button className='position-relative btn'>
              <i class="fa-solid fa-magnifying-glass "></i>
              </button>
            </Nav>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-2 text-uppercase order-lg-1">
            <Nav.Link className='cssItem text-dark' href="#home">Home</Nav.Link>
            <Nav.Link className='cssItem text-dark' href="#link">Collection</Nav.Link>
            <Nav.Link className='cssItem text-dark' href="#link">Specials</Nav.Link>
            <Nav.Link className='cssItem text-dark' href="#link">Blogs</Nav.Link>
            <Nav.Link className='cssItem text-dark' href="#link">About us</Nav.Link>
            <Nav.Link className='cssItem text-dark' href="#link">Popular</Nav.Link>


          </Nav>

        </Navbar.Collapse>
  
      </Container>
    </Navbar>
  );
}

export default Navbar1;