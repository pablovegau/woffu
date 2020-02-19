import styled from 'styled-components';
import { appMargins, appGrayColors, appTypography } from '../../../../styles';

export const PersonalInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${appMargins.base};
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
