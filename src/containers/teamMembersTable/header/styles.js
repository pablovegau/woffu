import styled from 'styled-components';
import { rem } from 'polished';
import { appMargins, appTypography, appGrayColors } from '../../../styles';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${rem('50px')};
  border-bottom: 1px solid ${appGrayColors.black20};
  background-color: ${appGrayColors.white};
`;

export const Title = styled.h1`
  margin-left: ${appMargins.base};
  ${appTypography.textBold.caption};
`;

export const DataRangeWrapper = styled.div`
  display: flex;
  margin-right: ${appMargins.giga};

  > div:nth-child(1) {
    margin-right: ${appMargins.base};
  }
`;
