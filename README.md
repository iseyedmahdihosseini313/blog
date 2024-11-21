/error defaultlocale 
<!-- set button in header
import { useTheme } from '@/context/ThemeContext';
import { Container } from './styled/Container';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container className="p-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md
          bg-secondary-light dark:bg-secondary-dark
          hover:opacity-80 transition-opacity"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </Container>
  );
} -->