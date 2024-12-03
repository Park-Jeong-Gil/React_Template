import { NavLink } from 'react-router-dom';
import { navigations } from '../../constants/navigations';

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {Object.keys(navigations).map((key) => (
              <li key={key}>
                <NavLink to={navigations[key].path}>
                  {navigations[key].label}
                </NavLink>
                {navigations[key].children && (
                  <ul>
                    {Object.keys(navigations[key].children).map((childKey) => (
                      <li key={childKey}>
                        {navigations[key].children &&
                          navigations[key].children[childKey] && (
                            <NavLink
                              to={navigations[key].children[childKey].path}>
                              {navigations[key].children[childKey].label}
                            </NavLink>
                          )}
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
