import { FC } from 'react';

interface Props {
  children: string
}

const Header: FC<Props> = ( { children } ) => {
  return (
    <div className="relative">
      <h1 className="text-4xl font-bold">{children}</h1>
    </div>
  );
};

export default Header;