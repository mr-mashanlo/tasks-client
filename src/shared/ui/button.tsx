import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  className?: string
  loading?: boolean
}

const Button: FC<Props> = ( { children, className, loading, ...others } ) => {
  return (
    <button {...others} className={twMerge( 'min-w-[8rem] px-3 py-2 bg-white text-black outline-none border border-white rounded-md relative', className )}>
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {loading && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">● ● ●</span>}
    </button>
  );
};

export default Button;