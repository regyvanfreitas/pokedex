import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#333',
        gap: '30px',
        justifyContent: 'center',
        height: '50px',
        fontSize: '25px',
        fontFamily: 'fantasy',
        color: 'white',
        alignItems: 'center',

        '@media(max-width: 655px)': {
          display: 'grid',
          height: '80px',
          gap: '5px',
          justifyContent: 'start',
          paddingLeft: '30px'
        },
        '@media(max-width: 500px)': {
          display: 'grid',
          height: '120px',
          gap: '5px',
        },
      }}
    >
      <Box>PokeDex © </Box>
      <Box sx={{ display: 'flex', gap: '10px', '@media(max-width: 500px)': {
          display: 'grid',
          gap: '0px',
        }, }}>
        <Box>Desenvolvido por: </Box>
        <Box>Regivan Mineiro de Freitas</Box>
      </Box>
    </Box>
  );
};

export default Footer;
