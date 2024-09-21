import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  className?: string
  loading?: boolean
}

const Button: FC<Props> = ( { children, className, loading, ...others } ) => {
  return (
    <button {...others} className={twMerge( 'min-w-48 p-2 bg-black text-white outline-none border-2 border-black font-medium rounded-lg relative', className )}>
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {loading && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">● ● ●</span>}
    </button>
  );
};

export default Button;