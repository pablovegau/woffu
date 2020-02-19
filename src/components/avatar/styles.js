import styled from 'styled-components';
import { rem } from 'polished';

const avatarSize = rem('50px');

export const ImageWrapper = styled.div`
  height: ${avatarSize};
  width: ${avatarSize};

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top center;
  }
`;
