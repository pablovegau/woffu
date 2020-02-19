import React, { useState, useEffect } from 'react';
import { PersonalInfo } from './personalInfo';
import { Holidays } from './holidays';

import { CardRowWrapper, UserId, StartDate } from './styles';

const userMock = {
  FirstName: 'Anna',
  LastName: 'Sans',
  JobTitleId: '123',
  DepartmentId: '456',
  ImageURL:
    'https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg',
  UserId: '54321',
  EmployeeStartDate: '2017-11-17T00:00:00.000',
  AllocatedDays: 24,
  UsedDays: 8,
  AvailableDays: 16,
};

export const CardRow = () => {
  const [startDate, setStartDate] = useState();

  useEffect(() => {
    const date = new Date(Date.parse(userMock.EmployeeStartDate));
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setStartDate(`${day}/${month}/${year}`);
  }, []);

  return (
    <CardRowWrapper>
      <PersonalInfo userInfo={userMock} />
      <UserId>
        <span>ID: </span>
        {userMock.UserId}
      </UserId>
      <Holidays
        allocatedDays={userMock.AllocatedDays}
        usedDays={userMock.UsedDays}
        availableDays={userMock.AvailableDays}
      />
      <StartDate>
        <span>Fecha de incorporación a la empresa: </span>
        {startDate}
      </StartDate>
    </CardRowWrapper>
  );
};
