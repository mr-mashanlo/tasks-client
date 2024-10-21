import { FC } from 'react';

interface Props {
  id: string
}

const Edit: FC<Props> = ( { id } ) => {

  const clickHandle = () => {
    console.log( id );
  };

  return (
    <a onClick={clickHandle} role="button" className="block px-3 py-1 rounded hover:bg-zinc-800">Edit</a>
  );
};

export default Edit;