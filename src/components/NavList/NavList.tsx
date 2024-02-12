import { FC } from 'react';
import styles from './NavList.module.scss';
import { NavListItem } from '../../shared/interfaces/nav-list-item.interface.ts';
import { Link } from 'react-router-dom';

interface NavListProps {
  links: NavListItem[]
}

const NavList: FC<NavListProps> = ({ links }) => (
  <nav className={styles.NavList} data-testid="NavList">
    <ul className="flex gap-x-12">
      { links.map((link) => (
        <li key={link.text}>
          <Link to={link.url} className="text-sm font-semibold leading-6 text-gray-900">
            {link.text}
          </Link>
        </li>
      )) }
    </ul>
  </nav>
);

export default NavList;
