import { FC, ReactNode } from 'react';
import parse from 'html-react-parser';

interface Props {
  children: ReactNode
}

const Content: FC<Props> = ( { children } ) => {
  return <div className="prose-sm prose-zinc text-white">{typeof children === 'string' ? parse( children ) : children}</div>;
};

export default Content;