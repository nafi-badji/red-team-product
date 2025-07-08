"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Sidebar from "../../../composants/Sidebar";


const DashboardLayout = ({ children }) => {

 
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/seconnecter");
  };

  return (
    <Container>
       <Sidebar user={user}/>
      <Main>{children}</Main>
    </Container>
  );
};

export default DashboardLayout;

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/image de fond.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Main = styled.div`
  flex-grow: 1;
  background-color: #f2f2f2;
`;

