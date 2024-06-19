import { PageContainer } from '@/components/PageContainer';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Perfil from '@/icons/perfil.jpg';

const Contact = () => {
  return (
    <PageContainer isContact>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '20px',
          backgroundColor: 'white',
          fontSize: '30px',
          fontFamily: 'fantasy',
        }}
      >
        Sobre o desenvolvedor
      </Grid>
      <Grid
        sx={{
          backgroundColor: 'white',
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <Image src={Perfil} alt="Regivan" width={150} height={150} />
        </Box>
      </Grid>
      <Grid
        sx={{
          display: 'grid',
          justifyContent: 'center',
          backgroundColor: 'white',
          fontSize: '25px',
          fontFamily: 'fantasy',
          gap: '10px',
        }}
      >
        <Box>Regivan Mineiro de Freitas</Box>
        <Box
          sx={{ display: 'flex', fontSize: '20px', justifyContent: 'center' }}
        >
          Desenvolvedor de Software
        </Box>
        <Box
          sx={{ display: 'flex', fontSize: '20px', justifyContent: 'center' }}
        >
          {`(88) 99906-1672`}
        </Box>
      </Grid>
    </PageContainer>
  );
};

export default Contact;
