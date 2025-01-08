import { NavLink } from 'react-router-dom';
import { getActiveMainMenu } from '../../util/activeMenu';

import '../../style/components/Lnb.scss';

export default function DesktopLnb() {
  const activeMainMenu = getActiveMainMenu();

  return (
    <aside className='lnb_nav'>
      <h3>PC lnb list</h3>
      <ul className='depth2'>
        {activeMainMenu?.children?.map((child) => (
          <li key={child.label}>
            <NavLink to={`${activeMainMenu?.path}/${child.path}`}>
              {child.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
