import styled from 'styled-components';
import { em, rem } from 'polished';
import { appTypography, appGrayColors, appPaddings, appMargins, appColors } from '../../../styles';

export const CardRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${rem('200px')};
  padding: ${appPaddings.base};
  border-bottom: 1px solid ${appGrayColors.black20};

  > span {
    margin-right: ${appMargins.micro};
    color: ${appGrayColors.black80};
    ${appTypography.text.small};
  }

  @media screen and (min-width: ${em('924px')}) {
    flex-direction: row;
    min-height: ${rem('50px')};
    padding: ${appPaddings.milli};
  }
`;

const tableText = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: ${appMargins.milli};
  color: ${appGrayColors.black60};
  ${appTypography.text.normal};

  @media screen and (min-width: ${em('924px')}) {
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }

  span {
    margin-bottom: ${appMargins.micro};
    color: ${appColors.primary.dark};
    ${appTypography.text.small};

    @media screen and (min-width: ${em('924px')}) {
      display: none;
    }
  }
`;

export const UserId = styled(tableText)`
  @media screen and (min-width: ${em('924px')}) {
    width: 10%;
  }
`;

export const StartDate = styled(tableText)`
  @media screen and (min-width: ${em('924px')}) {
    width: 33%;
  }
`;
