import { ButtonHTMLAttributes, FC, LiHTMLAttributes, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface BaseType {
  handleClick?: () => void,
  handleClose?: () => void
}

interface ButtonType extends BaseType, ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button'
  label: ReactNode
}
interface LinkType extends BaseType, LinkProps {
  type: 'link'
  label: ReactNode
}

interface DividerType extends BaseType, LiHTMLAttributes<HTMLLIElement> {
  type: 'divider'
}

type Props = ButtonType | LinkType | DividerType

const DropdownItem: FC<Props> = ( props ) => {

  const handleButtonClick = ( click?: () => void, close?: () => void ) => {
    if ( typeof click === 'function' ) {
      click();
    }
    if ( typeof close === 'function' ) {
      close();
    }
  };

  if ( props.type === 'link' ) {
    const { label, to, handleClick, handleClose, ...others } = props;
    return (
      <li className="p-1">
        <Link onClick={() => handleButtonClick( handleClick, handleClose )} to={to} {...others} className="block px-3 py-1 rounded hover:bg-zinc-800">{label}</Link>
      </li>
    );
  } else if ( props.type === 'button' ) {
    const { label, handleClick, handleClose, ...others } = props;
    return (
      <li className="p-1">
        <button onClick={() => handleButtonClick( handleClick, handleClose )} {...others} className="block w-full px-3 py-1 text-left rounded hover:bg-zinc-800">{label}</button>
      </li>
    );
  } else {
    return (
      <li className="border-t border-zinc-800"></li>
    );
  }
};

export default DropdownItem;