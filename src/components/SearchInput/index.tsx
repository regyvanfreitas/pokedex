import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  display: 'flex',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: '30px',
  marginLeft: '30px',
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const PrimarySearchAppBar: React.FC<SearchProps> = ({
  onChange,
  value,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Digite algo..."
          onChange={onChange}
          value={value}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  );
};
