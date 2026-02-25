import { theme, ThemeConfig } from 'antd';

export const defaultTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 4,
  },
  components: {
    Button: {
      borderRadius: 4,
    },
  },
};

export const getThemeConfig = (customTheme?: ThemeConfig): ThemeConfig => {
  return {
    ...defaultTheme,
    ...customTheme,
    token: {
      ...defaultTheme.token,
      ...customTheme?.token,
    },
    components: {
      ...defaultTheme.components,
      ...customTheme?.components,
    },
  };
};

export { theme };
