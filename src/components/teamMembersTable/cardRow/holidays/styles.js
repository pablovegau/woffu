import styled from 'styled-components';
import { rem } from 'polished';
import { appColors, appGrayColors, appTypography, appMargins } from '../../../../styles';

export const HolidayBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${appMargins.milli};
`;

export const HolidayLabel = styled.span`
  margin-bottom: ${appMargins.micro};
  color: ${appColors.primary.dark};
  ${appTypography.text.small};
`;

export const HolidaysBar = styled.div`
  display: flex;
  height: ${rem('20px')};
  width: ${rem('200px')};
`;

const getAvailableHolidaysComputedStyles = ({ availablePercent }) => `
  width: ${availablePercent}%;
`;

const getUsedHolidaysComputedStyles = ({ usedPercent }) => `
  width: ${usedPercent}%;
`;

export const AvailableHolidays = styled.div`
  height: ${rem('20px')};
  border-radius: 2px 0 0 2px;
  background-color: ${appColors.primary.main};

  ${props => getAvailableHolidaysComputedStyles(props)}
`;

export const UsedHolidays = styled.div`
  height: ${rem('20px')};
  border-radius: 0 2px 2px 0;
  background-color: ${appGrayColors.black10};

  ${props => getUsedHolidaysComputedStyles(props)}
`;

export const Separator = styled.div`
  height: ${rem('20px')};
  width: 1%;
`;
