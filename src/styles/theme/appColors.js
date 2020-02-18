import { lighten, darken } from 'polished';

const colors = {
  primary: '#0060ff',
};

export const appColors = {
  primary: {
    main: colors.primary,
    light: `${lighten(0.2, colors.primary)};`,
    dark: `${darken(0.1, colors.primary)};`,
  },
};
