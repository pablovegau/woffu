import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { HolidayBarWrapper, HolidayLabel, HolidaysBar, AvailableHolidays, UsedHolidays, Separator } from './styles';

export const Holidays = ({ allocatedDays, usedDays, availableDays }) => {
  const [availablePercent, setAvailablePercent] = useState();
  const [usedPercent, setUsedPercent] = useState();

  useEffect(() => {
    setAvailablePercent(((availableDays * 100) / allocatedDays).toFixed(2) - 0.5);
    setUsedPercent(((usedDays * 100) / allocatedDays).toFixed(2) - 0.5);
  }, [usedDays, availableDays, allocatedDays]);

  return (
    <HolidayBarWrapper>
      <HolidayLabel>Vacaciones:</HolidayLabel>
      <HolidaysBar>
        <AvailableHolidays availablePercent={availablePercent} />
        <Separator />
        <UsedHolidays usedPercent={usedPercent} />
      </HolidaysBar>
    </HolidayBarWrapper>
  );
};

Holidays.propTypes = {
  allocatedDays: PropTypes.number,
  usedDays: PropTypes.number,
  availableDays: PropTypes.number,
};
