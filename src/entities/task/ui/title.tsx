import { FC } from 'react';
import { When } from 'react-if';
import { Link } from 'react-router-dom';

interface Props {
  id: string,
  tag: string,
  title: string
}

const Title: FC<Props> = ( { id, tag, title } ) => {
  return (
    <span className="flex items-center gap-3">
      <When condition={tag}>
        <span className="px-2 py-1 text-xs rounded-md outline outline-1 outline-zinc-800">{tag}</span>
      </When>
      <Link to={`/task/${id}`} className="line-clamp-1 hover:underline">{title}</Link>
    </span>
  );
};

export default Title;