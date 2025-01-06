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
  // 페이지 라우팅 기본 구성
  {
    // 페이지 경로
    path: '/',
    // 페이지 컴포넌트
    element: Main,
    // 메뉴에 보여질 페이지 라벨
    label: 'Main',
  },
  {
    path: '/about',
    element: About,
    label: 'About',
    // 2뎁스는 아래 처럼 children 배열로 구성
    children: [
      { path: 'company', element: Company, label: 'Company' },
      { path: 'team', element: Team, label: 'Team' },
    ],
  },
];
