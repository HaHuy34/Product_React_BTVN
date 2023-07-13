import  { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler,
} from 'reactstrap';

const MenuBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const  {carts} = useSelector((state) => state.carts)
    console.log(carts);

  return (
    <div>
      <Navbar color="faded" light>
        <Link to="/products" className="me-auto">
          Shopping Card
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/products">Product</Link>
            </NavItem>
            <NavItem>
              <Link to="/card">Cart ({carts.length})</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
  
}

export default MenuBar