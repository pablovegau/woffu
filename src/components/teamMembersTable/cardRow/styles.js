import styled from 'styled-components';
import { appTypography, appGrayColors, appPaddings, appMargins, appColors } from '../../../styles';

export const CardRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${appPaddings.base};
  border-bottom: 1px solid ${appGrayColors.black20};

  > span {
    margin-right: ${appMargins.micro};
    color: ${appGrayColors.black80};
    ${appTypography.text.small};
  }
`;

const tableText = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: ${appMargins.milli};
  color: ${appGrayColors.black60};
  ${appTypography.text.normal};

  span {
    margin-bottom: ${appMargins.micro};
    color: ${appColors.primary.dark};
    ${appTypography.text.small};
  }
`;

export const UserId = styled(tableText)``;

export const StartDate = styled(tableText)``;
