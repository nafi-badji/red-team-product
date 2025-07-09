import React from 'react'
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { FaHotel, FaBell , FaSignOutAlt,  FaBars ,FaThLarge,FaPlus } from "react-icons/fa";
import CardHotels from './CardHotels';


const Liste = () => {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
       const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch('https://red-product-back-mc6n.onrender.com/api/hotels');
        const data = await res.json();
        // On ne garde que les champs utiles
        const trimmed = data.map(h => ({
          nom: h.nom,
          adresse: h.adresse,
          prix: h.prix,
          photo: h.photo ? `https://red-product-back-mc6n.onrender.com/${h.photo}` : null
        }));
        setHotels(trimmed);
      } catch (err) {
        console.error('Erreur récupération hôtels :', err);
      }
    };
    fetchHotels();
  }, []); 

  return (
   <Container>
    {/* sOpen={isSidebarOpen}> */}
         <Main>
           <Header>
             <Headitem>
               <Headermenu>
                 <MenuToggle onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
               <FaBars />
               </MenuToggle>
               <Titleh1>Liste des hôtels</Titleh1> 
               </Headermenu>
               <div>
                <Forsearch>
                {/* <FaSearch color='#A0A0A0' /> */}
                 <Search placeholder="Recherche" />
                 <FaBell />
                 <Photo
                 src="/images/a0.jpg.png"
                 alt='Profile'
                 />
                 <FaSignOutAlt />
                </Forsearch>
               </div>
             </Headitem>
             <HeadTwo>
             <Itemred>
               <h2 style={{fontWeight: "400"}}>Hotels</h2>  
               <p style={{ color: "#A0A0A0" }}>8</p>
              </Itemred>
             <Link href="/ajout">
              <Button>
                 <FaPlus style={{fontSize: '10px' }} />
                <p style={{fontSize: "12px"}}>Créer un nouveau hôtel</p>
              </Button>
             </Link>
             </HeadTwo>
           </Header>
           <Grid>
            {hotels.map((hotel, index) => (
              <CardHotels key={index} {...hotel} />
        ))}
           </Grid>
         </Main>
       </Container>
  )
}

export default Liste


const Container = styled.div`
     background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/image de fond.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
   
  @media (max-width: 768px){
   height: 100%;
   
   }
`;

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



const Main = styled.div`
  flex-grow: 1;
  background-color: #f2f2f2;
  overflow-y: auto;
   margin-left: 260px;
  height: 100vh;
   
   @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Header = styled.div`
 position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  `;
  
  const Headitem = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
   padding: 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

`
const Headermenu= styled.div`
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
`

const HeadTwo = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 15px;
  width: 100%;
   display:flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

const Itemred = styled.div`
  display:flex;
  flex-direction: row;
  gap: 10px;
  `
  const Button=styled.button`
  border: 1px solid #45484B;
  border-radius: 5px;
  padding: 0.5rem;
  color: #000;
  cursor: pointer;
  display:flex;
  align-items:center;
  gap: 0.5rem;
  

  `

const Titleh1=styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  color: #000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

 const Search = styled.input`
    
    padding: 0.2rem 0.4rem;
    font-size: 0.7rem;
   border-radius: 10px;
   border: 1px solid #ccc;
   @media (max-width: 768px) {
     padding: 0.2rem 0.4rem;
      
     }
 `;

  const Photo= styled.img`
    background-color: #f2f2f2;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  `

 const Forsearch = styled.div`
   display: flex;
   align-items: center;
   gap: 0.8rem;

 `

const Grid = styled.div`
   display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  padding: 3.7rem 0.5rem 0.5rem;

   @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

