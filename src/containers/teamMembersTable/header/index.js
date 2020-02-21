import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { HeaderWrapper, Title, DataRangeWrapper, DataPickerLabel } from './styles';

export const Header = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const [localEndDate, setLocalEndDate] = useState();
  const [localStartDate, setLocalStartDate] = useState();

  return (
    <HeaderWrapper>
      <Title>EQUIPO</Title>
      <DataRangeWrapper>
        <DataPickerLabel>Filtrar por fecha de incorporación</DataPickerLabel>
        <DatePicker
          selected={startDate}
          onChange={date => setLocalStartDate(date)}
          onCalendarClose={_ => setStartDate(localStartDate)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="12/02/2015"
        />
        <DatePicker
          selected={endDate}
          onChange={date => setLocalEndDate(date)}
          onCalendarClose={_ => setEndDate(localEndDate)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="12/02/2018"
        />
      </DataRangeWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  startDate: PropTypes.string,
  setStartDate: PropTypes.func,
  endDate: PropTypes.string,
  setEndDate: PropTypes.func,
};
