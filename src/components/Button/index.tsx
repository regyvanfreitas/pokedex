import { ButtonComponent } from './Button.style';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Image from 'next/image';

interface ButtonProps {
  label: string;
  onClick?: any;
  arrow?: 'arrowBack' | 'arrowForward';
  floatingIcon?: any;
  width?: string | number;
  height?: number;
  disabled?: boolean;
  borderRadius?: number;
  variant: 'text' | 'contained' | 'outlined';
  colorsConfig?: { font?: string; background?: string; border?: string };
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  arrow,
  floatingIcon,
  width,
  height,
  disabled,
  borderRadius,
  variant = 'contained',
  colorsConfig,
  fullWidth,
  ...rest
}) => {
  return (
    <ButtonComponent
      onClick={onClick}
      startIcon={arrow === 'arrowBack' ? <ArrowBackIosRoundedIcon /> : null}
      endIcon={arrow === 'arrowForward' ? <ArrowForwardIosRoundedIcon /> : null}
      disabled={disabled}
      variant={variant}
      config={colorsConfig}
      style={{ borderRadius, width, height }}
      fullWidth={fullWidth}
      {...rest}
    >
      {floatingIcon && (
        <Image
          src={floatingIcon}
          alt="Floating Icon"
          style={{ position: 'absolute', left: -9 }}
        />
      )}
      {label}
    </ButtonComponent>
  );
};

export default Button