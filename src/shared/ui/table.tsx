import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

const Table: FC<Props> = ( { children } ) => {
  return (
    <table className="mt-8">
      <tbody>
        {children}
      </tbody>
    </table>
  );
};

export default Table;