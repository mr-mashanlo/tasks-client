import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Priority, Status, Title } from '@/entities/task/ui';
import { Dropdown, DropdownItem } from '@/shared/ui';
import { OptionsIcon } from '@/shared/ui/icons';

interface Props {
  id: string,
  task: string,
  tag: string,
  title: string,
  status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog',
  priority: 'low' | 'medium' | 'high'
}

const TableRow: FC<Props> = ( { id, task, tag, title, status, priority } ) => {
  return (
    <tr>
      <td className="px-5 py-3 min-w-32"><Link to={`/task/${id}`} className="hover:underline">{task}</Link></td>
      <td className="px-5 py-3 w-full"><Title id={id} tag={tag} title={title} /></td>
      <td className="px-5 py-3"><Status status={status} /></td>
      <td className="px-5 py-3"><Priority priority={priority} /></td>
      <td className="px-5 py-3">
        <div className="flex items-center justify-center">
          <Dropdown
            position="bottom"
            button={<button className="block h-4 w-4 rounded-md bg-zinc-800 ring ring-zinc-800"><OptionsIcon /></button>}
            items={[
              <DropdownItem type="link" to={`/edit/${id}`} label="Edit" />,
              <DropdownItem type="divider" />,
              <DropdownItem type="button" label="Delete" handleClick={() => console.log( `delete ${id}` )} />
            ]} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;