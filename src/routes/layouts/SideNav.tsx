import { NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../../constants/navigations';

export default function SideNav() {
  const location = useLocation();

  // 현재 활성화된 최상위 메뉴 찾기
  const activeMainMenu = navigation.find((nav) => {
    // 전체 경로를 '/'로 분할
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const navPathSegments = nav.path.split('/').filter(Boolean);

    // 첫 번째 세그먼트가 일치하는지 확인
    return pathSegments[0] === navPathSegments[0];
  });

  // 활성화된 메뉴에 하위 메뉴가 없으면 사이드바를 렌더링하지 않음
  if (!activeMainMenu?.children) {
    return null;
  }

  return (
    <aside className='lnb_nav'>
      <h3>lnb list</h3>
      <ul className='depth2'>
        {activeMainMenu.children.map((child) => (
          <li key={child.label}>
            <NavLink to={`${activeMainMenu.path}/${child.path}`}>
              {child.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
