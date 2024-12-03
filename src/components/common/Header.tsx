import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants/navigations';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {navigation.map(({ path, label, children }) => (
              <li key={path}>
                <NavLink to={path || '#'}>{label}</NavLink>
                {children && (
                  <ul>
                    {children?.map(({ path, label }) => (
                      <li key={path}>
                        <NavLink to={path || '#'}>{label}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
