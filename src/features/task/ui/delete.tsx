import { FC } from 'react';

interface Props {
  id: string
}

const Delete: FC<Props> = ( { id } ) => {

  const clickHandle = () => {
    console.log( id );
  };

  return (
    <a onClick={clickHandle} role="button" className="block px-3 py-1 rounded hover:bg-zinc-800">Delete</a>
  );
};

export default Delete;