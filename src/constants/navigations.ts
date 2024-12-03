import { FC } from 'react';

// page components list
import Main from '../routes/pages/Main';

import About from '../routes/pages/About';
import Company from '../routes/pages/About/Company';
import Team from '../routes/pages/About/Team';

export interface pagesType {
  path: string;
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
      { path: 'company', element: Company, label: 'Company' },
      { path: 'team', element: Team, label: 'Team' },
    ],
  },
];
