import styled from 'styled-components';
import { em, rem } from 'polished';
import { appMargins, appTypography, appGrayColors } from '../../../styles';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: ${rem('166px')};
  border-bottom: 1px solid ${appGrayColors.black20};
  background-color: ${appGrayColors.white};

  @media screen and (min-width: ${em('900px')}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: ${rem('50px')};
  }
`;

export const Title = styled.h1`
  margin-left: ${appMargins.base};
  margin-top: ${appMargins.base};
  margin-bottom: ${appMargins.micro};
  ${appTypography.textBold.caption};

  @media screen and (min-width: ${em('900px')}) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const DataRangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${appMargins.base};

  @media screen and (min-width: ${em('900px')}) {
    flex-direction: row;
    justify-content: space-between;
    margin-right: ${appMargins.giga};
  }

  > div:nth-child(2) {
    margin-right: ${appMargins.base};
    margin-bottom: ${appMargins.milli};

    @media screen and (min-width: ${em('900px')}) {
      margin-bottom: 0;
    }
  }
`;

export const DataPickerLabel = styled.h4`
  margin-top: ${appMargins.micro};
  margin-bottom: ${appMargins.milli};
  color: ${appGrayColors.black60};
  ${appTypography.text.normal}

  @media screen and (min-width: ${em('900px')}) {
    margin-right: ${appMargins.kilo};
  }
`;
