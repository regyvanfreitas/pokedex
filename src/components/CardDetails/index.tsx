import { Box, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import theme from '@/theme/theme';
import Button from '../Button';
import { pokemonTypeColor } from '@/utils/pokemonType';
import { useRouter } from 'next/router';
import Footer from '../Footer';

interface CardDetailsProps {
  name?: string;
  type?: string[];
  icon?: any;
  number?: number;
  weight?: number;
  height?: number;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  name,
  type,
  icon,
  number,
  weight,
  height,
}) => {
  const router = useRouter()

  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.secondary.main}`,
        width: 'auto',
        minWidth: '250px',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px black',
        padding: '10px',
        textAlign: 'center',
        margin: '30px 30px 0px 30px',
        fontFamily: 'fantasy',
      }}
    >
      <Grid
        sx={{
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingRight: '10px',
          fontSize: '40px',
          display: 'flex',
        }}
      >
        <Grid>
          <Button
            label={name?.toLocaleUpperCase()!}
            variant="contained"
            colorsConfig={{ background: '#333' }}
            disabled={true}
            width={160}
            height={45}
          />
        </Grid>
        <Grid sx={{ alignItems: 'end' }}>#{number}</Grid>
      </Grid>

      <Image alt={name!} src={icon} width={200} height={200} />

      <Box
        sx={{
          display: 'flex',
          paddingTop: '10px',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {type?.map((pokemonType, index) => (
          <Button
            key={index}
            label={pokemonType!}
            variant="contained"
            colorsConfig={{ background: pokemonTypeColor(pokemonType!) }}
            disabled={true}
            borderRadius={20}
          />
        ))}
      </Box>
      <Grid
        sx={{
          display: 'flex',
          alignContent: 'center',
          width: '100%',
          justifyContent: 'center',
          gap: '20px',
          paddingTop: '20px',
        }}
      >
        <Box
          sx={{
            borderRight: '1px solid #000',
            paddingRight: '20px',
          }}
        >
          {weight! / 10} kg
        </Box>
        <Box>{height! * 10} cm</Box>
      </Grid>
      <Grid
        sx={{ display: 'flex', padding: '20px', justifyContent: 'center' }}
      >
        <Button label="Voltar" variant="contained" onClick={() => router.push('/')}/>
      </Grid>
    </Box>
    
  );
};

export default CardDetails;
