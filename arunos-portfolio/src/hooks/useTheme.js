import { useTheme as useThemeContext } from '../context/ThemeContext';

export const useThemeHook = () => {
  const { theme, toggleTheme, isDark } = useThemeContext();
  return { theme, toggleTheme, isDark };
};
