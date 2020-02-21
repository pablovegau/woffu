import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PersonalInfo } from './personalInfo';
import { Holidays } from './holidays';
import { useNearScreen } from '../../../assets/customHooks/useNearScreen';

import { CardRowWrapper, UserId, StartDate } from './styles';

export const CardRow = ({ userData }) => {
  const [startDate, setStartDate] = useState();
  const [show, element] = useNearScreen();

  const { UserId: userIdData, AllocatedDays, UsedDays, AvailableDays, EmployeeStartDate } = userData;

  useEffect(() => {
    const date = new Date(Date.parse(EmployeeStartDate));
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    setStartDate(`${day}/${month}/${year}`);
  }, [EmployeeStartDate]);

  return (
    <CardRowWrapper ref={element}>
      {show && (
        <>
          <PersonalInfo userInfo={userData} />
          <UserId>
            <span>ID: </span>
            {userIdData}
          </UserId>
          <Holidays allocatedDays={AllocatedDays} usedDays={UsedDays} availableDays={AvailableDays} />
          <StartDate>
            <span>Fecha de incorporación a la empresa: </span>
            {startDate}
          </StartDate>
        </>
      )}
    </CardRowWrapper>
  );
};

CardRow.propTypes = {
  userData: PropTypes.object,
};
