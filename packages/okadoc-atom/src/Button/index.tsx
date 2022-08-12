import React, { FC } from "react";
import Pallete from '../Pallete';

import './styles.module.scss';

const VARIANTS = {
  'primary-green': Pallete.primary.NiagaraGreen,
}

interface IButton {
  variant: string;
  children: React.ReactNode; // 👈️ type children
}

export const Button: FC<IButton> = ({ children, variant }) => {
  const buttonClass = `btn ${variant === 'primary-green' ? 'primary' : '' }`;

  return (
    <button
      className={buttonClass}
      style={{
        backgroundColor: VARIANTS[variant]
      }}
    >
      {children}
    </button>
  )
}
