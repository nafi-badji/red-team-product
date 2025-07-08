import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const Reinitialisation = () => {
  return (
     <Pagesignup>
         <Card>
                <Logoproduct>
            <Image 
            src="/images/link-svg.png" 
             alt="Logo"
             width={32}
             height={32}
    
             />
            RED PRODUCT
         </Logoproduct>
          <Container>
          <Title>Mot de passe oublié</Title>
          <Text>Entrez votre adresse e-mail ci-dessous et nous vous enveyons des instructions sur la façon de modifier votre mot de passe.</Text>
          <Label>Votre e-mail</Label>  
          <Input type="password" />
          <Button>Envoyer</Button>
        </Container>
         </Card>
          <Connect>
          <Link href="/seconnecter"><span style={{color: '#fff'}}>Revenir à la</span> <strong>connexion</strong></Link>
          </Connect>
        </Pagesignup>
  )
}

export default Reinitialisation



const Pagesignup = styled.div`
 height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/image de fond.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    padding: 1rem;
 
`;

const Card = styled.div`
//   height: 50vh;
//   width: 60vh;
     width: 90%;
    max-width: 400px;
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

    @media (max-width: 400px) {
    gap: 15px;
  }
`;

const Logoproduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 18px;
`;

const Container = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 5px;
  width: 90%;
  text-align: center;
    @media (max-width: 500px) {
    padding: 1.2rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1rem;
  margin-right: 8.1rem;
  color: #000;
  font-weight: 400;
    font-family: Roboto, sans-serif;

   @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: #A0A0A0;

  &:focus {
    outline: none;
    border-bottom: 1px solid #FFD964;
  }

   @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
const Label = styled.label`
  display: block;
  margin-right: 14rem;
  color: #A0A0A0;
  font-size: 0.8rem;
    font-family: Roboto, sans-serif;
`;
const Text = styled.p`
  margin-bottom: 1rem;
  color: #000;
  font-weight: 400;
  font-size: 16px;
`;


const Button = styled.button`
  width: 100%;
  background-color: #45484B;
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 1.2rem;
    font-family: Roboto, sans-serif;

  &:hover {
    background-color: #FFD964;
  }

   @media (max-width: 500px) {
    padding: 0.7rem;
    font-size: 0.95rem;
  }
`;
const Connect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.1rem;
`;

const Link = styled.a`
  color: #FFD964;
  font-size: 0.85rem;
    font-family: Roboto, sans-serif;
  display: block;
  cursor: pointer;

   @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
