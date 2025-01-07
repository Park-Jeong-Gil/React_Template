import { navigation } from '../constants/navigations';

export const getActiveMainMenu = () =>
  navigation.find((nav) => {
    // 전체 경로를 '/'로 분할
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const navPathSegments = nav.path.split('/').filter(Boolean);

    // 첫 번째 세그먼트가 일치하는지 확인
    return pathSegments[0] === navPathSegments[0];
  });
