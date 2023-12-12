import { CCollapse, CNavLink, CNavbar, CNavbarNav } from "@coreui/react";
import { CContainer } from "@coreui/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CNavbarBrand } from "@coreui/react";
import { useState } from "react";
import { CNavbarToggler } from "@coreui/react";
import Card from "@/components/card";

const ActualUser = () => {
  const { user } = useUser();
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <CNavbarBrand href="#">Welcome {user.name}!</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav component="nav">
              <CNavLink href="/api/auth/logout">Logout</CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <div className="card-s d-flex justify-content-center align-items-center">
        <Card />
      </div>
    </div>
  );
};

export default ActualUser;
