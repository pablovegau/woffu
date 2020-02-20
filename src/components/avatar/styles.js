import styled from 'styled-components';
import { rem } from 'polished';
import { appColors, appTypography } from '../../styles';

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

export const AvatarAcronym = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${appColors.primary.light};
  ${appTypography.headings.four}
`;
