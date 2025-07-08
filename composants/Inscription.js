'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import NextLink from 'next/link';

const Inscription = () => {
   const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nom || !email || !password || !termsAccepted) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    try {
      const res = await fetch('https://red-product-back-mc6n.onrender.com/api/usersignup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      // Rediriger après inscription réussie
      router.push('/seconnecter');
    } catch (err) {
      console.error(err);
      setError('Une erreur est survenue.');
    }
  };
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
         </Logoproduct >
         <form onSubmit={handleSubmit}>
           <Container>
          <Title>Inscrivez-vous en tant que Admin</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
            <Label htmlFor="nom" style={{ marginRight: '17rem'}}>Nom</Label>
          <Input type="text" value={nom} onChange={(e) => setNom(e.target.value)}  />
          <Label htmlFor="email" style={{ marginRight: '17rem'}}>Email</Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Label htmlFor="password">Mot de passe</Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <CheckboxContainer>
            <input type="checkbox" id="remember"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}/>
            <label htmlFor="remember" style={{ marginLeft: '0.5rem' }}>Accepter les termes et la politique</label>
          </CheckboxContainer>
          <Button type="submit">S'inscrire</Button>
        </Container>
         </form>
         </Card>
          <Connect>
  <StyledLink href="/seconnecter" passHref>
    <span style={{color: '#fff'}}>Vous n’avez pas de compte?</span> <strong>Se connecter</strong>
  </StyledLink>

          </Connect>
        </Pagesignup>
  )
}

export default Inscription

 
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
  color: #000;
  font-weight: 500;

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
  font-size: 0.7rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 0.85rem;
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

const StyledLink = styled(NextLink)`
  color: #FFD964;
  font-size: 0.85rem;
  display: block;
  cursor: pointer;

   @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;