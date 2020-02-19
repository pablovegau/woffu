import styled from 'styled-components';
import { rem } from 'polished';
import { appMargins, appTypography, appGrayColors } from '../../../styles';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${rem('50px')};
  border-bottom: 1px solid ${appGrayColors.black20};
`;

export const Title = styled.h1`
  margin-left: ${appMargins.base};
  ${appTypography.textBold.caption};
`;
