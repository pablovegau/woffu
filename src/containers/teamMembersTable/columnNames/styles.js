import styled from 'styled-components';
import { em, rem } from 'polished';
import { appGrayColors } from '../../../styles';

export const ColumnNamesWrapper = styled.div`
  display: none;
  height: ${rem('50px')};
  background-color: ${appGrayColors.black5};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  span:nth-child(1) {
    width: 33%;
  }

  span:nth-child(2) {
    width: 10%;
  }

  span:nth-child(3) {
    width: 24%;
  }

  span:nth-child(4) {
    width: 33%;
  }

  @media screen and (min-width: ${em('924px')}) {
    display: flex;
  }
`;
