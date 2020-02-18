import React from 'react';
import { GlobalStyle } from '../styles/globalStyle';
import { WoffuBoard } from '../containers/WoffuBoard';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <WoffuBoard />
    </>
  );
};
