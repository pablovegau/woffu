import styled from 'styled-components';
import { rem } from 'polished';
import { appMargins, appBorderRadius, appShadows } from '../../styles';

export const TeamMembersTableWrapper = styled.div`
  width: calc(100vw - ${rem('32px')});
  margin-left: auto;
  margin-right: auto;
  margin-top: ${appMargins.kilo};
  border-radius: ${appBorderRadius.base};
  background-color: white;
  box-shadow: ${appShadows.main};
`;
