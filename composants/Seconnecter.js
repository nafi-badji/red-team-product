import React,{useState} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/navigation';




const Seconnecter = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router= useRouter();

  const handleLogin = async (e) => {
     e.preventDefault()

    

    try {
      const res = await fetch(' https://red-product-back-mc6n.onrender.com/api/userlogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }
      localStorage.setItem('user', JSON.stringify(data.user)); 
      localStorage.setItem('token', data.token); 
      // Redirection ou stockage du token ici
      router.push("/dashbord")
    } catch (err) {
       console.error(err);
      setError('Email ou mot de passe incorrect');
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
     </Logoproduct>
      <Container>
      <Title>Connectez-vous en tant que Admin</Title>
      <Input type="email" placeholder="E-mail"   value={email}
        onChange={e => setEmail(e.target.value)}/>
      <Input type="password" placeholder="Mot de passe"  value={password}
        onChange={e => setPassword(e.target.value)}/>
      <CheckboxContainer>
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" style={{ marginLeft: '0.5rem' }}>Gardez-moi connecté</label>
      </CheckboxContainer>
      <Button onClick={handleLogin}>Se connecter</Button>
         {error && <ErrorMsg>{error}</ErrorMsg>}
    </Container>
     </Card>
      <Connect>
      <Link href="/reinitialisation" style={{fontWeight: 'bold'}}>Mot de passe oublié?</Link>
      <Link href="/inscription"><span style={{color: '#fff'}}>Vous n’avez pas de compte?</span> <strong>S’inscrire</strong></Link>
      </Connect>
    </Pagesignup>
  )
}

export default Seconnecter


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
const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 1rem;
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

const Link = styled.a`
  color: #FFD964;
  font-size: 0.85rem;
  display: block;
  cursor: pointer;

   @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;