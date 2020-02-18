import React from 'react';
import PropTypes from 'prop-types';

import { ImageWrapper } from './styles';

export const Avatar = ({ imageUrl }) => {
  return (
    <ImageWrapper>
      <img alt="Team member avatar" src={imageUrl} />
    </ImageWrapper>
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
};
