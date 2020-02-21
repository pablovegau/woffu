import styled from 'styled-components';
import { rem } from 'polished';
import { appMargins, appBorderRadius, appShadows } from '../../styles';

const headerHeight = {
  mobile: rem('60px'),
};

const tableMarginTop = {
  mobile: rem('32px'),
};

const tableMarginBottom = {
  mobile: rem('16px'),
};

export const TeamMembersTableWrapper = styled.div`
  width: calc(100vw - ${rem('32px')});
  max-width: ${rem('1250px')};
  height: calc(100vh - ${headerHeight.mobile} - ${tableMarginTop.mobile} - ${tableMarginBottom.mobile});
  overflow: scroll;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${appMargins.kilo};
  border-radius: ${appBorderRadius.base};
  background-color: white;
  box-shadow: ${appShadows.table};
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
`;
