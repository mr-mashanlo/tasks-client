import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id?: string
  label?: string
  type: 'text' | 'password'
}

const Input: FC<Props> = ( { id, label, type, ...others } ) => {
  return (
    <div className="relative">
      {label &&
        <label htmlFor={id} className="px-2 text-xs font-medium absolute -top-[0.55rem] left-5">
          <span className="px-1 relative z-10 bg-[#09090b]">{label}</span>
        </label>
      }
      <input {...others} type={type} name={id} className="block w-full px-3 py-2 border border-zinc-800 rounded-md bg-transparent placeholder:text-zinc-600" />
    </div>
  );
};

export default Input;