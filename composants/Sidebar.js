import React,{ useState} from 'react'
import { FaThLarge,FaHotel } from 'react-icons/fa';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';


const SidebarFixe = ({ user })  => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
  
    <Sidebar isOpen={isSidebarOpen}>
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
      </Sidebar>
  )
}

export default SidebarFixe

const Sidebar = styled.div`
  width: 260px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("/images/image de fond.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? "0" : "-260px")};
    top: 0;
    height: 100%;
    z-index: 998;
    transition: left 0.3s ease;
  }

  @media (max-width: 768px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("/images/image de fond.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    left: ${({ isOpen }) => (isOpen ? "0" : "-260px")};
    top: 0;
    height: 100%;
    z-index: 998;
    transition: left 0.3s ease;
  }
`;
const Logoproduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin-right: 3.5rem;
`;
const MenuItem = styled.div`
  margin-left: 0.6rem;
  margin-top: 0.3rem;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 12px;
`;

const Logodash = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f2f2f2;
  padding: 5px;
  color: #000;
`;

const Titre = styled.h2`
  cursor: pointer;
  padding: 20px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  text-align: center;
`;

const Hoteltitre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  border: none;
  border-top: 1px solid #ccc;
  display: flex;
  gap: 1rem;
  padding: 20px;
  text-align: center;
  font-size: 12px;
`;
const Photo = styled.img`
  background-color: #f2f2f2;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

 const Menu = styled.div`
    display: flex;
    flex-direction: column;
  height: 7.5rem;

 `;

// import React from 'react'


// const Sidebar = () => {

//   return (
//      <Sidebar isOpen={isSidebarOpen}>
//         <div>
//           <Menu>
//             <Logoproduct>
//               <Image
//                 src="/images/link-svg.png"
//                 alt="Logo RED PRODUCT"
//                 width={20}
//                 height={20}
//               />
//               RED PRODUCT
//             </Logoproduct>
//             <MenuItem>Principal</MenuItem>
//           </Menu>

//           <Logodash>
//             <FaThLarge color="#000" />
//             <Link href="/dashbord">Dashbord</Link>
//           </Logodash>
//           <Hoteltitre>
//             <FaHotel color="#fff" />
//             <Link href="/dashbord/listehotels">
//               <Titre>Liste des hôtels</Titre>
//             </Link>
//           </Hoteltitre>
//         </div>
//         <Profile>
//           <Photo src="/images/a0.jpg.png" alt="Profile" />
//           <div>
//             <p>{user ? user.nom : "Utilisateur"}</p>
//             <strong
//               style={{ backgroundColor: "#0f0", width: "0.5rem" }}
//             ></strong>
//             <span style={{ color: "#0f0" }}>en ligne</span>
//           </div>
//         </Profile>
//       </Sidebar>
//   )
// }

// export default Sidebar