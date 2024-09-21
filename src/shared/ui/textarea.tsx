import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string
  label?: string
}

const Textarea: FC<Props> = ( { id, label, ...others } ) => {
  return (
    <div className="relative">
      {label && <label htmlFor={id} className="px-2 text-xs font-medium absolute -top-[0.55rem] left-5 bg-white">{label}</label>}
      <textarea {...others} id={id} name={id} className="block w-full p-2 outline outline-2 outline-gray-200 rounded-sm focus:outline-blue-300" />
    </div>
  );
};

export default Textarea;