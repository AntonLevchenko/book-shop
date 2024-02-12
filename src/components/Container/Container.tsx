import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ' + className} data-testid="Container">
    { children }
  </div>
);

export default Container;
