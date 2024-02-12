import { FC } from 'react';
import LinkWrapper from '../Link/LinkWrapper.tsx';

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
  <LinkWrapper url={linkUrl} className="-m-1.5 p-1.5" data-testid="Logo">
    <span className="sr-only">{image.name}</span>
    <img
      className="h-8 w-auto"
      width={image.width}
      height={image.height}
      src={image.url}
      alt={image.name}
    />
  </LinkWrapper>
);

export default Logo;
