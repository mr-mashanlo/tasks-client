import { cloneElement, FC, ReactElement, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { When } from 'react-if';

interface Props {
  positionX: 'left' | 'right',
  positionY: 'top' | 'bottom',
  button: ReactElement,
  items: Array<ReactElement>
}

const Dropdown: FC<Props> = ( { positionX, positionY, button: Button, items } ) => {

  const buttonRef = useRef<HTMLButtonElement>( null );
  const menuRef = useRef<HTMLDivElement>( null );
  const [ isVisible, setIsVisible ] = useState<boolean>( false );

  const handleButtonClick = () => {
    setIsVisible( !isVisible );
  };

  const handleOutsideClick = ( event: MouseEvent ) => {
    if ( !( event.target instanceof HTMLElement ) ) {
      return;
    }
    if ( !menuRef.current?.contains( event.target ) && !buttonRef.current?.contains( event.target ) ) {
      setIsVisible( false );
    }
  };

  useEffect( () => {
    if ( isVisible ) {
      document.addEventListener( 'mousedown', handleOutsideClick );
    } else {
      document.removeEventListener( 'mousedown', handleOutsideClick );
    }
    return () => {
      document.removeEventListener( 'mousedown', handleOutsideClick );
    };
  }, [ isVisible ] );

  return (
    <div className="relative">
      { cloneElement( Button, { onClick: handleButtonClick, ref: buttonRef } ) }
      <When condition={isVisible}>
        <div ref={menuRef} className={twMerge( 'absolute z-10 overflow-hidden', positionX === 'left' ? 'left-0' : 'right-0', positionY === 'top' ? 'pb-2 bottom-full' : 'pt-2 top-full' )}>
          <ul className="min-w-48 border border-zinc-800 rounded-md bg-[#191919]">
            {items.map( ( item, index ) => { return cloneElement( item, { key: index, handleClose: () => setIsVisible( false ) } ); } )}
          </ul>
        </div>
      </When>
    </div>
  );
};

export default Dropdown;