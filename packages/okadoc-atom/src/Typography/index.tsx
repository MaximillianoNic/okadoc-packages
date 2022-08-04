import React, { FC } from 'react';
import './typography.style.scss'

const SIZES = {
  'one': 'h1',
  'two': 'h2'
}

type H1Props = {
  size?: string;
  children: React.ReactNode; // 👈️ type children
};

export const Heading: FC<H1Props> = ({ children, size }) => {
  const classHeading = `heading__${size ? SIZES[size] : SIZES['one']}`

  return (
    <h1 className={classHeading}>{children}</h1>
  )
}