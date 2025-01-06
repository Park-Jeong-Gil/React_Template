import { FC } from 'react';

// page components list
import Main from '../routes/pages/Main';

import Sub1 from '../routes/pages/Sub1';
import Sub1_1 from '../routes/pages/Sub1/Sub1-1';
import Sub1_2 from '../routes/pages/Sub1/Sub1-2';

import Sub2 from '../routes/pages/Sub2';
import Sub2_1 from '../routes/pages/Sub2/Sub2-1';
import Sub2_2 from '../routes/pages/Sub2/Sub2-2';

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
    path: '/Sub1',
    element: Sub1,
    label: 'Sub1',
    // 2뎁스는 아래 처럼 children 배열로 구성
    children: [
      { path: 'Sub1-1', element: Sub1_1, label: 'Sub1-1' },
      { path: 'Sub1-2', element: Sub1_2, label: 'Sub1-2' },
    ],
  },
  {
    path: '/Sub2',
    element: Sub2,
    label: 'Sub2',
    // 2뎁스는 아래 처럼 children 배열로 구성
    children: [
      { path: 'Sub2-1', element: Sub2_1, label: 'Sub2-1' },
      { path: 'Sub2-2', element: Sub2_2, label: 'Sub2-2' },
    ],
  },
];
