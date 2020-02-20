import React from 'react';
import PropTypes from 'prop-types';

import { ImageWrapper, AvatarAcronym } from './styles';

export const Avatar = ({ imageUrl, firstName, lastName }) => {
  function renderAvatar() {
    if (imageUrl) {
      return <img alt="Team member avatar" src={imageUrl} />;
    }

    const firstNameFirstLetter = firstName.charAt(0);
    const lastNameFirstLetter = lastName.charAt(0);

    return <AvatarAcronym>{`${firstNameFirstLetter}${lastNameFirstLetter}`}</AvatarAcronym>;
  }

  return <ImageWrapper>{renderAvatar()}</ImageWrapper>;
};

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
