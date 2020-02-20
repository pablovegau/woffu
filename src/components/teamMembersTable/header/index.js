import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { HeaderWrapper, Title, DataRangeWrapper } from './styles';

export const Header = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <HeaderWrapper>
      <Title>EQUIPO</Title>
      <DataRangeWrapper>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="12/02/2015"
        />
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
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
