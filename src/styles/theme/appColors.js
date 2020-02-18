import { lighten, darken } from 'polished';

const colors = {
  primary: '#2D7FE2',
};

export const appColors = {
  primary: {
    main: colors.primary,
    light: `${lighten(0.2, colors.primary)};`,
    dark: `${darken(0.1, colors.primary)};`,
  },
};
