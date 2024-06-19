import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card';
import { CircularProgress, Container, Grid } from '@mui/material';
import Button from '@/components/Button';
import { PageContainer } from '@/components/PageContainer';
import { PrimarySearchAppBar } from '@/components/SearchInput';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';

export interface Pokemon {
  name: string;
  imageUrl: string;
  type: string[];
  number: number;
  weight: number;
  height: number;
}

const Pokedex = () => {
  const router = useRouter();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredData, setFilteredData] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePokemonCount, setVisiblePokemonCount] = useState<number>(20);
  const [load, setLoad] = useState<boolean>(false);

  const loadMorePokemon = () => {
    setVisiblePokemonCount((prevCount) => prevCount + 20);
  };

  const onClick = (pokemon: Pokemon) => {
    const serializedData = JSON.stringify(pokemon);
    localStorage.setItem('pokemon', serializedData);
    router.push('/details');
  };

  useEffect(() => {
    setLoad(true);
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${visiblePokemonCount}`
        );
        const results = response.data.results;

        const pokemonData = await Promise.all(
          results.map(async (result: { url: string }) => {
            const pokemonResponse = await axios.get(result.url);
            return {
              name: pokemonResponse.data.name,
              imageUrl: pokemonResponse.data.sprites.front_default,
              type: pokemonResponse.data.types.map(
                (type: any) => type.type.name
              ),
              number: pokemonResponse.data.id,
              weight: pokemonResponse.data.weight,
              height: pokemonResponse.data.height,
            };
          })
        );

        setPokemonList(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };
    setLoad(false);

    fetchPokemonList();
  }, [visiblePokemonCount]);

  useEffect(() => {
    const filtered = pokemonList.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [pokemonList, searchTerm]);

  return (
    <Container disableGutters maxWidth={false} sx={{ overflowY: 'hidden' }}>
      {load === true ? (
        <Grid
          sx={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Grid>
      ) : null}

      <PageContainer
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        isDetails={filteredData.length <= 4}
      >
        <Grid
          container
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',

            '@media(max-width: 1065px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            '@media(max-width: 840px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media(max-width: 600px)': {
              gridTemplateColumns: '1fr',
            },
          }}
        >
          {filteredData
            ? filteredData.map((pokemon) => (
                <Grid key={pokemon.name}>
                  <Card
                    name={pokemon.name}
                    icon={pokemon.imageUrl}
                    number={pokemon.number}
                    onClick={() => onClick(pokemon)}
                  />
                </Grid>
              ))
            : pokemonList.slice(0, visiblePokemonCount).map((pokemon) => (
                <Grid key={pokemon.name}>
                  <Card
                    name={pokemon.name}
                    icon={pokemon.imageUrl}
                    number={pokemon.number}
                    onClick={() => onClick(pokemon)}
                  />
                </Grid>
              ))}
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            width: '100%',
            padding: '30px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {visiblePokemonCount < 500 && (
            <Button
              label="Carregar Mais"
              variant="contained"
              onClick={loadMorePokemon}
              colorsConfig={{ background: '#333' }}
              width={220}
              height={45}
            />
          )}
        </Grid>
      </PageContainer>
      <Footer />
    </Container>
  );
};

export default Pokedex;
