import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Content: FC<Props> = ( { children } ) => {
  return <div className="prose prose-sm prose-zinc text-white">{children}</div>;
};

export default Content;