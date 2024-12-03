import { ComponentType } from 'react';

// page list
import Main from '../routes/pages/Main';
import About from '../routes/pages/About/About';

export type NavigationItem = {
  path: string;
  label: string;
  component?: ComponentType<any>;
  children?: Record<string, NavigationItem>;
};

export const navigations: Record<string, NavigationItem> = {
  main: { path: '/', label: 'Main', component: Main },

  about: {
    path: '/about',
    label: 'About',
    component: About,
    children: {
      company: { path: '/about/company', label: 'Company' },
      team: { path: '/about/team', label: 'Team' },
    },
  },

  // partners
  partners: {
    path: '/partners',
    label: 'Partners',
    children: {
      details: { path: '/partners/details', label: 'Details' },
    },
  },

  contact: { path: '/contact', label: 'Contact' },

  // auth
  auth: {
    path: '/auth',
    label: 'Auth',
    children: {
      login: { path: '/auth/login', label: 'Login' },
      signup: { path: '/auth/signup', label: 'Signup' },
      find: {
        path: '/find',
        label: 'Find',
        // children: {
        //   id: { path: '/id', label: 'ID' },
        //   password: { path: '/password', label: 'Password' },
        // },
      },
    },
  },

  // users
  users: {
    path: '/users',
    label: 'Users',
    children: {
      profile: { path: '/users/profile', label: 'Profile' },
      setting: { path: '/users/setting', label: 'Setting' },
      cart: { path: '/users/cart', label: 'Cart' },
      likes: { path: '/users/likes', label: 'likes' },
      posts: { path: '/users/posts', label: 'Posts' },
    },
  },
};
