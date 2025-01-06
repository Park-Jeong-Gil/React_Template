import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants/navigations';

export default function SideNav() {
  return (
    <aside className='lnb_nav'>
      <h3>lnb list</h3>
      <ul>
        {navigation.map(({ path, label, children }) => (
          <li key={label}>
            <NavLink to={path}>{label}</NavLink>
            {children && (
              <ul className='depth2'>
                {children.map((child) => (
                  <li key={child.label}>
                    <NavLink to={`${path}/${child.path}`}>
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
