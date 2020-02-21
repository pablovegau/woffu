import React, { useState, useEffect } from 'react';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

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
    setUsers(usersMock);

    if (startDate && endDate) {
      const filterUsers = [];

      from(usersMock)
        .pipe(
          filter(
            userData =>
              new Date(userData.EmployeeStartDate) > startDate && new Date(userData.EmployeeStartDate) < endDate,
          ),
        )
        .subscribe(data => {
          filterUsers.push(data);
        });

      setUsers(filterUsers);
    }
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
