import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants/navigations';

export default function Header() {
  return (
    <header id='header'>
      <nav className='c_inner gnb_nav'>
        <ul className='gnb_list'>
          {navigation.map(
            ({ path, label, children }) =>
              label && (
                <li key={label}>
                  <NavLink to={children ? `${path}/${children[0].path}` : path}>
                    {label}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
      </nav>
    </header>
  );
}
