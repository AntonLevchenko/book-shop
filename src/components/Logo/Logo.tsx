import { FC } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  linkUrl: string;
  image: {
    url: string;
    name: string;
    width?: number;
    height?: number;
  }
}

const Logo: FC<LogoProps> = ({linkUrl, image}) => (
  <Link to={linkUrl} className="-m-1.5 p-1.5" data-testid="Logo">
    <span className="sr-only">{image.name}</span>
    <img
      className="h-8 w-auto"
      width={image.width}
      height={image.height}
      src={image.url}
      alt={image.name}
    />
  </Link>
);

export default Logo;
