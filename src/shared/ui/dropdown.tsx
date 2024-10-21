import { cloneElement, FC, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { When } from 'react-if';

type DividerType = { type: 'divider' };

type LinkType = { type: 'link', label: ReactNode, href: string };

type ButtonType = { type: 'button', label: ReactNode, onClick: () => void };

interface Props {
  position: string,
  button: ReactElement,
  items: Array<DividerType | LinkType | ButtonType>
}

const Dropdown: FC<Props> = ( { position, button: Button, items } ) => {

  const buttonRef = useRef<HTMLButtonElement>( null );
  const menuRef = useRef<HTMLDivElement>( null );
  const [ isVisible, setIsVisible ] = useState<boolean>( false );

  const handleButtonClick = () => {
    setIsVisible( !isVisible );
  };

  const handleItemClick = ( callback: () => void ) => {
    callback();
    setIsVisible( false );
  };

  const handleOutsideClick = ( event: MouseEvent ) => {
    if ( event.target instanceof Node && !menuRef.current?.contains( event.target ) && !buttonRef.current?.contains( event.target ) ) {
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
        <div ref={menuRef} className={twMerge( 'absolute right-0 z-10 overflow-hidden', position === 'bottom' ? 'pt-2 top-full' : 'pb-2 bottom-full' )}>
          <ul className="min-w-48 border border-zinc-800 rounded-md bg-zinc-900">
            {items.map( ( item, index ) => {
              if ( item.type === 'link' ) {
                return (
                  <li key={index} className="p-1">
                    <Link to={item.href} className="block px-3 py-1 rounded hover:bg-zinc-800">{item.label}</Link>
                  </li>
                );
              } else if ( item.type === 'button' ) {
                return (
                  <li key={index} className="p-1">
                    <button onClick={() => handleItemClick( item.onClick )} className="block w-full px-3 py-1 text-left rounded hover:bg-zinc-800">{item.label}</button>
                  </li>
                );
              } else {
                return (
                  <li key={index} className="border-t border-zinc-800"></li>
                );
              }
            } )}
          </ul>
        </div>
      </When>
    </div>
  );
};

export default Dropdown;