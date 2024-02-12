import { FC, ReactNode } from 'react';
import { Link } from "react-router-dom";


interface LinkProps {
  url: string;
  children: ReactNode;
  className?: string;
}

const LinkWrapper: FC<LinkProps> = ({ url, className, children }) => (
  <Link to={url} className={className} data-testid="Link">
    { children }
  </Link>
);

export default LinkWrapper;
