import React from 'react';
import PropTypes from 'prop-types';

import { ImageWrapper } from './styles';

const imageMock = 'https://randomuser.me/api/portraits/women/44.jpg';

export const Avatar = ({ imageUrl }) => {
  return (
    <ImageWrapper>
      <img alt="Team member avatar" src={imageMock} />
    </ImageWrapper>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
};
