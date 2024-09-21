import { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id?: string,
  value?: string
}

const ChangeTaskFolder: FC<Props> = ( { value = 'default', ...others } ) => {
  const [ isVisible, setIsVisible ] = useState<boolean>( false );
  const [ defaultValue, setDefaultValue ] = useState<string>( value );

  const themeVariants = {
    default: defaultValue === 'default' ? 'bg-[#C6CAD2] z-10' : 'bg-[#C6CAD2] opacity-50',
    orange: defaultValue === 'orange' ? 'bg-orange-400 z-10' : 'bg-orange-400 opacity-50',
    red: defaultValue === 'red' ? 'bg-red-400 z-10' : 'bg-red-400 opacity-50',
    blue: defaultValue === 'blue' ? 'bg-blue-400 z-10' : 'bg-blue-400 opacity-50'
  };

  const visibleVariants ={
    default: isVisible ? 'right-0' : 'right-0',
    orange: isVisible ? 'right-6' : 'right-0',
    red: isVisible ? 'right-12' : 'right-0',
    blue: isVisible ? 'right-18' : 'right-0'
  };

  return (
    <div onClick={() => setIsVisible( !isVisible )} className={twMerge( 'flex items-center gap-2 duration-500 relative', isVisible ? 'w-[10.5rem] sm:w-[6.5rem]' : 'w-4' )}>
      <button type="button" onClick={() => setDefaultValue( 'blue' )} className={twMerge( 'w-4 h-4 flex-shrink-0 rounded-full absolute duration-500', themeVariants.blue, visibleVariants.blue )}></button>
      <button type="button" onClick={() => setDefaultValue( 'red' )} className={twMerge( 'w-4 h-4 flex-shrink-0 rounded-full absolute duration-500', themeVariants.red, visibleVariants.red )}></button>
      <button type="button" onClick={() => setDefaultValue( 'orange' )} className={twMerge( 'w-4 h-4 flex-shrink-0 rounded-full absolute duration-500', themeVariants.orange, visibleVariants.orange )}></button>
      <button type="button" onClick={() => setDefaultValue( 'default' )} className={twMerge( 'w-4 h-4 flex-shrink-0 rounded-full absolute duration-500', themeVariants.default, visibleVariants.default )}></button>
      <input value={defaultValue} type="text" name="folder" readOnly hidden { ...others } />
    </div>
  );
};

export default ChangeTaskFolder;