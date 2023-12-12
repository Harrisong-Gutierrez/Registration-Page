import {
  CCard,
  CCardBody,
  CCardImage,
  CCardLink,
  CCardText,
  CCardTitle,
  CListGroupItem,
} from "@coreui/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

const Card = () => {
  const { user } = useUser();

  return (
    <CCard style={{ width: "18rem" }}>
      <CCardImage
        orientation="center"
        src="https://s.gravatar.com/avatar/dd4db6049ba8f77c522e834bf5b2b5a5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png"
      />

      <CCardBody>
        <CCardTitle>{user.nickname}</CCardTitle>
        <CCardText>{user.email}</CCardText>
      </CCardBody>

      <CCardBody>
        <CCardLink href="/api/auth/logout">Logout</CCardLink>
      </CCardBody>
    </CCard>
  );
};

export default Card;
