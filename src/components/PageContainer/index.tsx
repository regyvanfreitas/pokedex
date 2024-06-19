import theme from '@/theme/theme';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Pokeball from '@/icons/Pokeball.svg';
import contact from '@/icons/contact.svg';
import home from '@/icons/home.svg';
import { PrimarySearchAppBar } from '../SearchInput';
import { Dispatch, SetStateAction } from 'react';
import Button from '../Button';
import { useRouter } from 'next/router';

interface TopBarProps {
  children: React.ReactNode;
  isDetails?: boolean;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  searchTerm?: string;
  isContact?: boolean;
}

export const PageContainer: React.FC<TopBarProps> = ({
  children,
  isDetails = false,
  setSearchTerm,
  searchTerm,
  isContact = false,
}) => {
  const router = useRouter();

  return (
    <Grid
      sx={{
        backgroundColor: `${theme.palette.primary.main} `,
        height: isDetails ? '100vh' : '100%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          fontSize: 50,
          color: 'white',
          fontFamily: 'fantasy',
          display: 'flex',
          paddingLeft: '30px',
          backgroundColor: '#333',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Box>
            <Image src={Pokeball} alt="logo" />
          </Box>
          <Box
            sx={{
              '@media(max-width: 800px)': {
                display: 'none',
              },
            }}
          >
            Pokédex
          </Box>
        </Box>

        <Grid
          sx={{
            display: 'flex',
            color: 'black',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <PrimarySearchAppBar
            onChange={(e) => setSearchTerm!(e.target.value)}
            value={searchTerm}
          />
        </Grid>

        <Box
          sx={{
            display: 'flex',
            fontSize: '25px',
            alignContent: 'center',
            alignItems: 'center',
            paddingRight: '30px',
            fontFamily: 'fantasy',

            '@media(max-width: 600px)': {
              display: 'none',
            },
          }}
        >
          <Button
            label={isContact ? 'Início' : 'Sobre o desenvolvedor'}
            variant="contained"
            width={200}
            height={40}
            colorsConfig={{ background: 'white', font: 'black' }}
            onClick={() => {
              isContact ? router.push('/') : router.push('/contact');
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: '30px',

            '@media(min-width: 601px)': {
              display: 'none',
            },
          }}
        >
          <Image
            src={isContact ? home : contact}
            alt="Início"
            width={30}
            onClick={() => {
              isContact ? router.push('/') : router.push('/contact');
            }}
          />
        </Box>
      </Box>
      {children}
    </Grid>
  );
};
