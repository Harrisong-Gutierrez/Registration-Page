import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { CAlert } from "@coreui/react";

import ActualUser from "./actualUser";
import Login from "./login";

const Home = () => {
  const { user, error, isLoading } = useUser();

  console.log(user);

  if (isLoading) return <CAlert color="secondary">Loading</CAlert>;
  if (error) return <CAlert color="danger">{error.message}</CAlert>;

  if (user) {
    return (
      <div>
        <ActualUser />
      </div>
    );
  }
  return <Login />;
};

export default Home;
