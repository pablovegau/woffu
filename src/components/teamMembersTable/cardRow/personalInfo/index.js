import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../../avatar';

import { PersonalInfoWrapper, InfoWrapper, Name, JobInfo } from './styles';

export const PersonalInfo = ({ userInfo }) => {
  const { FirstName, LastName, JobTitleId, DepartmentId, ImageURL } = userInfo;
  return (
    <PersonalInfoWrapper>
      <Avatar imageUrl={ImageURL} />
      <InfoWrapper>
        <Name>{`${FirstName} ${LastName}`}</Name>
        <JobInfo>{`${JobTitleId} | ${DepartmentId}`}</JobInfo>
      </InfoWrapper>
    </PersonalInfoWrapper>
  );
};

PersonalInfo.propTypes = {
  userInfo: PropTypes.object,
};
