import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MediumIcon } from '@/shared/ui/icons';

interface Props {
  children: string
}

const Header: FC<Props> = ( { children } ) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button onClick={() => navigate( -1 )} className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center absolute top-1/2 -left-20 rotate-180 -translate-y-1/2"><MediumIcon /></button>
      <h1 className="text-lg font-medium">{children}</h1>
    </div>
  );
};

export default Header;