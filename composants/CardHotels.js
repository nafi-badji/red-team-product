import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  max-width: 280px;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function HotelCard({ photo, adresse, nom, prix }) {
  return (
    <Card>
      <Image src={photo} alt={nom} />
      <Info>
        <p style={{ color: '#8D4B38', fontSize: '0.7rem'}}>{adresse}</p>
        <h3>{nom}</h3>
        <p style={{fontSize:'0.8rem' }}>{prix} XOF par nuit</p>
      </Info>
    </Card>
  );
}
