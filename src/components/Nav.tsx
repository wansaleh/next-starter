import Link from 'next/link';

import ThemeSelect from './ThemeSelect';

export default function Nav() {
  return (
    <ul className="flex absolute top-0 right-0 left-0 justify-between p-4 text-sm">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      <ul className="flex">
        <li className="ml-3">
          <ThemeSelect />
        </li>
      </ul>
    </ul>
  );
}
