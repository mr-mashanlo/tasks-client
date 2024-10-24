import { FC, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface BaseType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
}

interface FramedType extends BaseType {
  display: 'framed',
  label: string,
  varning?: string
}

interface BorderedType extends BaseType {
  display: 'bordered'
}

interface NakedType extends BaseType {
  display: 'naked'
}

type Props = FramedType | BorderedType | NakedType

const Textarea: FC<Props> = ( props ) => {
  if ( props.display === 'framed' ) {
    const { name, label, varning, ...others } = props;
    return (
      <div className="relative">
        <label htmlFor={name} className="px-2 text-xs font-medium bg-[#191919] absolute -top-[0.55rem] left-3 z-10">{varning ? varning : label}</label>
        <textarea {...others} name={name} className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent resize-y placeholder:text-zinc-600 focus:border-zinc-500', varning ? 'border-red-300' : 'border-zinc-800' )} />
      </div>
    );
  } else if ( props.display === 'bordered' ) {
    const { name, ...others } = props;
    return (
      <div>
        <textarea {...others} name={name} className="block w-full px-3 py-2 outline-none border border-zinc-800 rounded-md bg-transparent resize-y placeholder:text-zinc-600 focus:border-zinc-500" />
      </div>
    );
  } else {
    const { name, ...others } = props;
    return (
      <div>
        <textarea {...others} name={name} className="block w-full outline-none border-none bg-transparent resize-y placeholder:text-zinc-600" />
      </div>
    );
  }
};

export default Textarea;