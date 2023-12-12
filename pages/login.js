import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CContainer,
  CImage,
} from "@coreui/react";
import { CNavbarToggler } from "@coreui/react";
import { CCollapse, CNavLink, CNavbar, CNavbarNav } from "@coreui/react";
import { useState } from "react";

const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
        <CContainer fluid>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse " visible={visible}>
            <CNavbarNav component="nav">
              <CNavLink href="/api/auth/login">Login</CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <div className="margin-gap d-flex justify-content-center">
        <CCard className=" text-center">
          <CCardHeader className="bg-dark">
            <div className="clearfix">
              <CImage
                align="center"
                rounded
                src="https://s3.us-east-2.amazonaws.com/static.smbssolutions.com/logos/smbs-logo-footer.png"
                width={120}
                height={50}
              />
            </div>
          </CCardHeader>
          <CCardBody>
            <CCardTitle>SMBS solutions</CCardTitle>
            <CCardText className="p-with">
              Welcome to the best web development company, we are committed to
              improving customer service, Prescribing Smart Solutions to real
              life business challenges
            </CCardText>
            <div className="buttons">
              <CButton align="start" color="dark" href="/api/auth/login">
                Login
              </CButton>
              <CButton
                align="end"
                color="dark"
                href="https://dev-13fvzukvgc3empff.us.auth0.com/u/signup?state=hKFo2SB3TnJUREs4LXBCWW85NFBhTUw1a1UzYzdiSkRYaUpBWaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEY1SlQxdm93OE9rV1R6SjUwMXRnU0NiTllwYUNndklfo2NpZNkgVEpOZHp1bVg3TjE3RTNkNzNHdmFldjIxVUQ1T1R5cUQ"
              >
                Sign Up
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </div>
    </div>
  );
};

export default Login;
