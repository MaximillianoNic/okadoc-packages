import React, { FC } from "react";
import Pallete from '../Pallete';

const VARIANTS = {
  'primary-green': Pallete.primary.NiagaraGreen,
}

interface IButton {
  variant: string;
  children: React.ReactNode; // 👈️ type children
}

const Button: FC<IButton> = ({ children, variant }) => {
  return (
    <button
      style={{
        backgroundColor: VARIANTS[variant]
      }}
    >
      {children}
    </button>
  )
}

export default Button;
