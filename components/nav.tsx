'use client';

import Link from 'next/link';

import ThemeSelect from './theme-select';

export default function Nav() {
  return (
    <ul className="absolute inset-x-0 top-0 flex justify-between p-4 text-sm">
      <li>
        <Link href="/">Home</Link>
      </li>

      <ul className="flex">
        <li className="ml-3">
          <ThemeSelect />
        </li>
      </ul>
    </ul>
  );
}
