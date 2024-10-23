import { FC } from 'react';
import { PlusIcon } from '@/shared/ui/icons';
import { Status } from '@/entities/task/ui';
import { useFilterStore } from '../model';
import { Dropdown, DropdownItem } from '@/shared/ui';

const StatusFilter: FC = () => {

  const status = useFilterStore( state => state.status );
  const setStatus = useFilterStore( state => state.setStatus );

  const handleStatusClick = ( status: 'todo' | 'inProgress' | 'done' | 'cancelled' | 'backlog' | '' ) => {
    setStatus( status );
  };

  return (
    <Dropdown
      position="bottom"
      button={<button className="min-w-[8.2rem] px-3 py-2 inline-flex items-center gap-3 rounded-md border border-dashed border-zinc-800">{status ? <Status status={status} /> : <><PlusIcon /> <span>Status</span></>}</button>}
      items={[
        <DropdownItem type="button" label={<Status status="todo" />} handleClick={() => handleStatusClick( 'todo' )} />,
        <DropdownItem type="button" label={<Status status="inProgress" />} handleClick={() => handleStatusClick( 'inProgress' )} />,
        <DropdownItem type="button" label={<Status status="done" />} handleClick={() => handleStatusClick( 'done' )} />,
        <DropdownItem type="button" label={<Status status="cancelled" />} handleClick={() => handleStatusClick( 'cancelled' )} />,
        <DropdownItem type="button" label={<Status status="backlog" />} handleClick={() => handleStatusClick( 'backlog' )} />,
        <DropdownItem type="divider" />,
        <DropdownItem type="button" label="Clear" handleClick={() => handleStatusClick( '' )} />
      ]}
    />
  );
};

export default StatusFilter;