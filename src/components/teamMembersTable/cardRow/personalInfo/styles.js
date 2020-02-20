import styled from 'styled-components';
import { em } from 'polished';
import { appMargins, appGrayColors, appTypography, appPaddings } from '../../../../styles';

export const PersonalInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${appMargins.base};

  @media screen and (min-width: ${em('924px')}) {
    width: 33%;
    margin-bottom: 0;
    padding-left: ${appPaddings.kilo};
  }
`;

export const InfoWrapper = styled.div`
  margin-left: ${appMargins.base};
`;

export const Name = styled.div`
  color: ${appGrayColors.black70};
`;

export const JobInfo = styled.div`
  color: ${appGrayColors.black40};
  ${appTypography.text.small};
`;
