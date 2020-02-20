import React, { useState, useEffect } from 'react';
import { Header } from './header';
import { CardRow } from './cardRow';
import { ColumnNames } from './columnNames';

import { TeamMembersTableWrapper, HeaderWrapper } from './styles';

import { usersMock } from '../../assets/usersMock';

export const TeamMembersTable = () => {
  const [users, setUsers] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    // In this case here is were I would do the petition to the endpoint to get the info
    setUsers(usersMock);
  }, [startDate, endDate]);

  return (
    <TeamMembersTableWrapper>
      <HeaderWrapper>
        <Header startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
        <ColumnNames />
      </HeaderWrapper>
      {users.map((userData, index) => (
        <CardRow userData={userData} key={index} />
      ))}
    </TeamMembersTableWrapper>
  );
};
