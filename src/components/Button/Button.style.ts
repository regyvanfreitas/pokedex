import { Button, styled } from '@mui/material'

interface ButtonProps {
  config?: { font?: string; background?: string; border?: string }
}

export const ButtonComponent = styled(Button)<ButtonProps>(({ config }) => ({
  borderRadius: '10px',
  width: '136px',
  height: '36px',

  textTransform: 'none',
  fontSize: '15px',
  position: 'relative',
  display: 'flex',
  color: `${config?.font}`,
  opacity: 1,
  padding: '5px',

  '&:hover': {
    transition: '0.3s',
    opacity: '0.9',
    backgroundColor: `${config?.background}`,
  },

  '&.Mui-disabled': {
    backgroundColor: '#505050',
    color: '#ffffff',
  },

  '& .MuiButton-endIcon': {
    position: 'absolute',
    right: '12px',
    color: '#0199fd',
  },
  '& .MuiButton-startIcon': {
    position: 'absolute',
    left: '12px',
    color: '#0199fd',
  },

  '&.MuiButton-contained': {
    backgroundColor: `${config?.background}`,
  },

  '&.MuiButton-outlined': {
    border: `1.5px solid ${config?.border}`,
    '&:hover': {
      border: 'none',
    },
  },
}))