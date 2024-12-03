import { FC } from 'react';

// page list
import Main from '../routes/pages/Main';
import About from '../routes/pages/About/About';
import Company from '../routes/pages/About/Company';
import Team from '../routes/pages/About/Team';

interface pagesType {
  index?: boolean;
  path?: string;
  element: FC;
  label: string;
  children?: pagesType[];
}

export const navigation: pagesType[] = [
  {
    path: '/',
    element: Main,
    label: 'Main',
  },
  {
    path: '/about',
    element: About,
    label: 'About',
    children: [
      { path: '/about/company', element: Company, label: 'Company' },
      { path: '/about/team', element: Team, label: 'Team' },
    ],
  },
];
