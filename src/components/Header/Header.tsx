import { FC } from 'react';
import NavList from '../NavList/NavList.tsx';
import { NavListItem } from '../../shared/interfaces/nav-list-item.interface.ts';
import Logo from '../Logo/Logo.tsx';
import MYBOOK from '/MYBOOK.svg'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks.ts';
import { cartItemsCount } from '../../features/cart/cartSelectors.ts';

interface HeaderProps {}

const NAV_LINKS: NavListItem[] = [
  {
    text: 'Shop',
    url: ''
  },
  {
    text: 'Blog',
    url: ''
  }
]

const Header: FC<HeaderProps> = () => {
  const cartCount = useAppSelector(cartItemsCount);

  return <header className="absolute inset-x-0 top-0 z-50" data-testid="Header">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1 divide-x divide-gray-900 space-x-5">
        <Logo linkUrl={'#'} image={{url: MYBOOK, name: ''}}/>
        <Link to={'cart'} className="flex items-center justify-between pl-5">
          <ShoppingCartIcon className="h-6 w-6 text-black"/>
          {cartCount}
        </Link>
      </div>
      <NavList links={NAV_LINKS}/>
    </nav>
  </header>
};

export default Header;
