import React, { FC } from 'react';

type H1Props = {
  children: React.ReactNode; // 👈️ type children
};

export const H1: FC<H1Props> = ({ children }) => (
  <h1>{children}</h1>
)