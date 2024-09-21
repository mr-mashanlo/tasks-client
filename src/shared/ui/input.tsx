import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string
  label?: string
  type: 'text' | 'password'
}

const Input: FC<Props> = ( { id, label, type, ...others } ) => {
  return (
    <div className="relative">
      {label &&
        <label htmlFor={id} className="px-2 text-xs font-medium absolute -top-[0.55rem] left-5">
          <span className="relative z-10">{label}</span>
          <span className="block w-full h-1 bg-[#DEE0E4] absolute top-[0.6rem] left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      }
      <input {...others} type={type} id={id} name={id} className="block w-full px-3 py-2 bg-transparent rounded-md outline-none border-2 border-gray-400 focus:border-gray-700" />
    </div>
  );
};

export default Input;