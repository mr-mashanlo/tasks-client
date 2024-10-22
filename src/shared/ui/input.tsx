import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id?: string,
  label?: string,
  varning?: string
  type: 'text' | 'password',
}

const Input: FC<Props> = ( { id, label, varning, type, ...others } ) => {
  return (
    <div className="relative">
      {label &&
        <label htmlFor={id} className="px-2 text-xs font-medium absolute -top-[0.55rem] left-2">
          <span className="px-1 relative z-10 bg-[#09090b]">{varning ? varning : label}</span>
        </label>
      }
      <input {...others} type={type} name={id} className={twMerge( 'block w-full px-3 py-2 border rounded-md bg-transparent placeholder:text-zinc-600', varning ? 'border-red-300' : 'border-zinc-800' )} />
    </div>
  );
};

export default Input;