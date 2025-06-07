
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

function Header() {
  const [showBasic, setShowBasic] = useState(true);
  return (
    <div>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => {
              setShowBasic(prev => {
                console.log("toggled to:", !prev)
                return !prev
              })
  
            }}
            aria-controls='navbarExample01'
            aria-expanded= {showBasic}
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={showBasic} id="navbarExample01">
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Heading</h1>
        <h4 className='mb-3'>Subheading</h4>
        <a className='btn btn-primary' href='' role='button'>
          Call to action
        </a>
      </div>
    </div>
  );
}

export default Header;


