import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants/navigations';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {navigation.map(({ path, label, children }) => (
            <li key={label}>
              <NavLink
                to={
                  children ? `${path || ''}/${children[0].path || ''}` : path
                }>
                {label}
              </NavLink>
              {children && (
                <ul>
                  {children.map(({ path: childPath, label }) => (
                    <li key={label}>
                      <NavLink to={`${path || ''}/${childPath || ''}`}>
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
