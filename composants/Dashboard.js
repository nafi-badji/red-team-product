"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaEnvelope,
  FaFileAlt,
  FaHotel,
  FaComments,
  FaBuilding,
  FaBell,
  FaSignOutAlt,
  FaBars,
  // FaThLarge,
} from "react-icons/fa";
// import Link from "next/link";

const Dashbord = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      {/* <Sidebar isOpen={isSidebarOpen}>
        <div>
          <Menu>
            <Logoproduct>
              <Image
                src="/images/link-svg.png"
                alt="Logo RED PRODUCT"
                width={20}
                height={20}
              />
              RED PRODUCT
            </Logoproduct>
            <MenuItem>Principal</MenuItem>
          </Menu>

          <Logodash>
            <FaThLarge color="#000" />
            <Link href="/dashbord">Dashbord</Link>
          </Logodash>
          <Hoteltitre>
            <FaHotel color="#fff" />
            <Link href="/dashbord/listehotels">
              <Titre>Liste des hôtels</Titre>
            </Link>
          </Hoteltitre>
        </div>
        <Profile>
          <Photo src="/images/a0.jpg.png" alt="Profile" />
          <div>
            <p>{user ? user.nom : "Utilisateur"}</p>
            <strong
              style={{ backgroundColor: "#0f0", width: "0.5rem" }}
            ></strong>
            <span style={{ color: "#0f0" }}>en ligne</span>
          </div>
        </Profile>
      </Sidebar> */}
      <Main>
        <Header>
          <Headitem>
            <Headermenu>
              <MenuToggle onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <FaBars />
              </MenuToggle>
              <Titleh1>Dashbord</Titleh1>
            </Headermenu>
            <div>
              <Forsearch>
                {/* <FaSearch color='#A0A0A0' /> */}
                <Search placeholder="Recherche" />
                <FaBell />
                <Photo src="/images/a0.jpg.png" alt="Profile" />
                <FaSignOutAlt onClick={handleLogout} />
              </Forsearch>
            </div>
          </Headitem>
          <Itemred>
            <h2 style={{ fontWeight: "400" }}>Bienvenue sur RED PRODUCT</h2>
            <p style={{ color: "#A0A0A0", fontSize: "10px" }}>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </Itemred>
        </Header>
        <Grid>
          <Card>
            <IconWrapper>
              <FaFileAlt color="#a78bfa" />
            </IconWrapper>
            <div>
              <p>125 Formulaires</p>
              <p style={{ fontSize: "12px" }}>Je ne sais pas quoi mettre</p>
            </div>
          </Card>
          <Card>
            <IconWrapper>
              <FaComments color="#06b6d4" />
            </IconWrapper>
            <div>
              <p>40 Messages</p>
              <p style={{ fontSize: "12px" }}>Je ne sais pas quoi mettre</p>
            </div>
          </Card>
          <Card>
            <IconWrapper>
              <FaUser color="#facc15" />
            </IconWrapper>
            <div>
              <parseFloat>600 Utilisateurs</parseFloat>
              <p style={{ fontSize: "12px" }}>Je ne sais pas quoi mettre</p>
            </div>
          </Card>
          <Card>
            <IconWrapper>
              <FaEnvelope color="#ef4444" />
            </IconWrapper>
            <div>
              <p>25 E-mails</p>
              <p style={{ fontSize: "12px" }}>Je ne sais pas quoi mettre</p>
            </div>
          </Card>
          <Card>
            <IconWrapper>
              <FaHotel color="#8b5cf6" />
            </IconWrapper>
            <div>
              <p>40 Hôtels</p>
              <p style={{ fontSize: "12px" }}>Je ne sais pas quoi mettre</p>
            </div>
          </Card>
          <Card>
            <IconWrapper>
              <FaBuilding color="#3b82f6" />
            </IconWrapper>
            <div>
              <p>02 Entités</p>
              <p style={{ fontSize: "12px" }}>Je ne sais pas quoi mettre</p>
            </div>
          </Card>
        </Grid>
      </Main>
    </Container>
  );
};

export default Dashbord;

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

// const Sidebar = styled.div`
//   width: 260px;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   @media (max-width: 600px) {
//     background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
//       url("/images/image de fond.jpg");
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     position: fixed;
//     left: ${({ isOpen }) => (isOpen ? "0" : "-260px")};
//     top: 0;
//     height: 100%;
//     z-index: 998;
//     transition: left 0.3s ease;
//   }

//   @media (max-width: 768px) {
//     background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
//       url("/images/image de fond.jpg");
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     position: fixed;
//     left: ${({ isOpen }) => (isOpen ? "0" : "-260px")};
//     top: 0;
//     height: 100%;
//     z-index: 998;
//     transition: left 0.3s ease;
//   }
// `;

const MenuToggle = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #000;
  display: none;

  @media (max-width: 600px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    font-size: 15px;
    top: 23px;
    left: 9px;
    z-index: 999;
  }
`;

// const Menu = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 20px;
//   height: 6rem;
// `;

// const Logoproduct = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 4px;
//   color: #ffffff;
//   font-family: Roboto, sans-serif;
//   font-weight: 400;
//   font-size: 15px;
//   margin-right: 3.5rem;
// `;

// const MenuItem = styled.div`
//   margin-left: 0.6rem;
//   margin-top: 0.3rem;
//   color: #fff;
//   font-family: Roboto, sans-serif;
//   font-size: 12px;
// `;

// const Logodash = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   background: #f2f2f2;
//   padding: 5px;
//   color: #000;
// `;

// const Titre = styled.h2`
//   cursor: pointer;
//   padding: 20px;
//   font-family: Roboto, sans-serif;
//   font-size: 13px;
//   text-align: center;
// `;

// const Hoteltitre = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Profile = styled.div`
//   border: none;
//   border-top: 1px solid #ccc;
//   display: flex;
//   gap: 1rem;
//   padding: 20px;
//   text-align: center;
//   font-size: 12px;
// `;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  background-color: #f2f2f2;
`;


const Headitem = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
const Headermenu = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  //  @media (max-width: 600px) {
  //    display: flex;
  //  }

  //  @media (max-width: 768px) {
  //   display: flex;
  //  gap: 1rem;
  //  align-items: center;
  // }
`;

const Itemred = styled.div`
  background: #fff;
  padding: 16px;
  width: 100%;
`;
const Titleh1 = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  color: #000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Search = styled.input`
  padding: 0.4rem 0.7rem;
  font-size: 0.8rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  @media (max-width: 768px) {
    padding: 0.2rem 0.4rem;
  }
`;

const Photo = styled.img`
  background-color: #f2f2f2;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const Forsearch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  font-size: 30px;
  margin-right: 20px;
`;
