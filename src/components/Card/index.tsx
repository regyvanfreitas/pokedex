import { Box, Grid } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import theme from '@/theme/theme';

interface CardProps {
  name?: string;
  type?: string;
  icon?: any;
  number?: number;
  onClick?: any
}

const Card: React.FC<CardProps> = ({ name, type, icon, number, onClick }) => {
  return (
    <Grid
      sx={{
        backgroundColor: `${theme.palette.secondary.main}`,
        width: 'auto',
        minWidth: '200px',
        borderRadius: '10px',
        boxShadow: '2px 2px 5px black',
        padding: '10px',
        textAlign: 'center',
        margin: '30px 30px 0px 30px',
        fontFamily: 'fantasy',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={onClick}
    >
      <Grid sx={{ textAlign: 'end', paddingRight: '10px' }}>#{number}</Grid>
      <Image alt={name!} src={icon} width={200} height={200} />
      <Grid>{name?.toLocaleUpperCase()}</Grid>
    </Grid>
  );
};

export default Card;
