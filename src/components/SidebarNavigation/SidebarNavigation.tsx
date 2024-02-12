import { FC, useState } from 'react';
import styles from './SidebarNavigation.module.scss';


export interface NavigationListItem {
  text: string;
  value: string
}

interface SidebarNavigationProps {
  title: string;
  active: string;
  navigationList: NavigationListItem[];
  onChange: (value: string) => void
}

const SidebarNavigation: FC<SidebarNavigationProps> = ({title, active = '', navigationList, onChange}) => {
  const [activeItem, setActiveItem] = useState(active);
  const onClick = (item: NavigationListItem) => {
    setActiveItem(item.value)
    onChange(item.value);
  }

  return <div className={styles.SidebarNavigation} data-testid="SidebarNavigation">
    <h3 className="pb-[15px] text-[25px]">{title}</h3>
    <ul>
      {navigationList.map((item) => (
        <li key={item.text} className={activeItem === item.value ? 'bg-white text-amber-400' : ''}>
          <a className="p-[10px] block" onClick={() => onClick(item)}>{item.text}</a>
        </li>
      ))}
    </ul>
  </div>
};

export default SidebarNavigation;
