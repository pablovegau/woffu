import styled from 'styled-components';
import { rem } from 'polished';
import { appColors } from '../../styles';

export const HeaderWrapper = styled.header`
  height: ${rem('60px')};
  width: 100vw;
  background-color: ${appColors.primary.main};
`;
