'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const UploadBox = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 2px dashed #ccc;
  border-radius: 12px;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 2rem;
  background-color: #444;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-end;
`;
export default function AddHotel() {
    
  //   nom: '',
  //   adresse: '',
  //   email: '',
  //   telephone: '',
  //   prix: '',
  //   devise: 'XOF',
  //   photo: null,
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  // const handlePhotoChange = (e) => {
  //   setFormData(prev => ({ ...prev, photo: e.target.files[0] }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Formulaire soumis :', formData);

   
  // };
    

  
        // États pour chaque champ
    const [nom, setNom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [prix, setPrix] = useState("");
    const [devise, setDevise] = useState("F XOF");
    const [photo, setPhoto] = useState(null);
    const router = useRouter();
  
  
    // Envoi du formulaire
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Préparation du FormData
      const formData = new FormData();
      formData.append('nom', nom);
      formData.append('adresse', adresse);
      formData.append('email', email);
      formData.append('telephone', telephone);
      formData.append('prix', prix);
      formData.append('devise', devise);
      if (photo) formData.append('photo', photo);
  
      try {
        const response = await fetch('https://red-product-back-mc6n.onrender.com/api/hotels', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        if (response.ok) {
    toast.success("Hôtel ajouté avec succès !");
    setTimeout(() => {
      router.push("/dashbord/listehotels"); // Change ce chemin selon ta route réelle
    }, 1000); // 1 secondes pour laisser le temps au toast de s'afficher
  
    // Réinitialiser le formulaire
    setNom(""); setAdresse(""); setEmail("");
    setTelephone(""); setPrix(""); setDevise("F XOF");
    setPhoto(null);
  } else {
    toast.error(data.message || "Erreur lors de l'ajout !");
  }
  
      } catch (err) {
        console.error("Erreur ajout hôtel :", err);
      }
    };
  
    // Gestion de l'image
    const handleImageUpload = (e) => {
      setPhoto(e.target.files[0]);
    };
  return (
    <Container>
      <Title>Créer un nouveau hôtel</Title>
       
       <form onSubmit={handleSubmit}>
      <FormGrid>
        <Field>
          <Label>Nom de l'hôtel</Label>
          <Input type="text"  value={nom}
              onChange={e => setNom(e.target.value)}  placeholder="CAP Marniane" />
        </Field>

        <Field>
          <Label>Adresse</Label>
          <Input type="text"  placeholder="Les îles du Saloum, Mar Lodj " value={adresse}
              onChange={e => setAdresse(e.target.value)} />
        </Field>

        <Field>
          <Label>E-mail</Label>
          <Input type="email"  name="email" value={email}
              onChange={e => setEmail(e.target.value)} placeholder="email@example.com" />
        </Field>

        <Field>
          <Label>Numéro de téléphone</Label>
          <Input type="tel"   placeholder="+221 77 777 77 77" value={telephone}
              onChange={e => setTelephone(e.target.value)}  />
        </Field>

        <Field>
          <Label>Prix par nuit</Label>
          <Input type="text"    value={prix}
              onChange={e => setPrix(e.target.value)} placeholder="25.000 XOF" />
        </Field>

        <Field>
          <Label>Devise</Label>
          <Select name="devise" value={devise}
              onChange={e => setDevise(e.target.value)}>
            <option>XOF</option>
            <option>EUR</option>
            <option>USD</option>
          </Select>
        </Field>
        <UploadBox>
          <Input 
              type="file"
              id="photo"
              accept="image/*"
            onChange={handleImageUpload} />
        </UploadBox>
      </FormGrid>

      <Button type="submit">Enregistrer</Button>
       </form>
    </Container>
  );
}
