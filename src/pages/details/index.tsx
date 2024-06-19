import { Pokemon } from '..';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import CardDetails from '@/components/CardDetails';
import { PageContainer } from '@/components/PageContainer';
import Footer from '@/components/Footer';

const Details = () => {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  useEffect(() => {
    const p = JSON.parse(localStorage.getItem('pokemon')!);
    setPokemon(p);
  }, []);

  console.log(pokemon);

  return (
    <Container disableGutters maxWidth={false}>
      <PageContainer isDetails={true}>
        <CardDetails
          name={pokemon.name}
          icon={pokemon.imageUrl}
          number={pokemon.number}
          type={pokemon.type}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      </PageContainer>
      <Footer />
    </Container>
  );
};

export default Details;
