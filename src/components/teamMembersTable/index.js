import React from 'react';
import { Header } from './header';
import { CardRow } from './cardRow';

import { TeamMembersTableWrapper } from './styles';

export const TeamMembersTable = () => {
  return (
    <TeamMembersTableWrapper>
      <Header />
      <CardRow />
      <CardRow />
    </TeamMembersTableWrapper>
  );
};
