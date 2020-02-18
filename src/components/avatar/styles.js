import styled from 'styled-components';
import { rem } from 'polished';

const avatarSize = rem('50px');

export const ImageWrapper = styled.div`
  height: ${avatarSize};
  width: ${avatarSize};

  img {
    width: 100%;
    border-radius: 50%;
  }
`;
