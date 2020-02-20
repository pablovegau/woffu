import React, { useState, useEffect } from 'react';
import { Header } from './header';
import { CardRow } from './cardRow';
import { ColumnNames } from './columnNames';

import { TeamMembersTableWrapper, HeaderWrapper } from './styles';

import { usersMock } from '../../assets/usersMock';

export const TeamMembersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // In this case here is were I would do the petition to the endpoint to get the info
    setUsers(usersMock);
  }, []);

  return (
    <TeamMembersTableWrapper>
      <HeaderWrapper>
        <Header />
        <ColumnNames />
      </HeaderWrapper>
      {users.map((userData, index) => (
        <CardRow userData={userData} key={index} />
      ))}
    </TeamMembersTableWrapper>
  );
};
