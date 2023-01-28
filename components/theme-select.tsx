import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = {
  light: {
    label: 'Light Mode',
    icon: SunIcon,
  },
  dark: {
    label: 'Dark Mode',
    icon: MoonIcon,
  },
  system: {
    label: 'System Default',
    icon: SystemIcon,
  },
};

export default function ThemeSelect() {
  const [mounted, setMounted] = useState(false);
  const { theme = 'system', setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function toggle() {
    const themeKeys = Object.keys(themes);
    const themeIndex = themeKeys.indexOf(theme);
    setTheme(themeKeys[(themeIndex + 1) % themeKeys.length]);
  }

  const Icon = themes[theme].icon;

  return (
    <>
      <button
        type="button"
        className="hover:text-brand flex h-8 w-8 items-center justify-center gap-1 px-1 py-0 font-semibold transition"
        onClick={toggle}
        title={themes[theme].label}
      >
        <Icon />
      </button>
    </>
  );
}

function SunIcon(props) {
  return (
    <svg
      height="48"
      width="48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" x2="12" y1="1" y2="3" />
      <line x1="12" x2="12" y1="21" y2="23" />
      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
      <line x1="1" x2="3" y1="12" y2="12" />
      <line x1="21" x2="23" y1="12" y2="12" />
      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
    </svg>
  );
}
function MoonIcon(props) {
  return (
    <svg
      height="48"
      width="48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
function SystemIcon(props) {
  return (
    <svg
      height="48"
      width="48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect height="14" width="20" rx="2" ry="2" x="2" y="3" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}
