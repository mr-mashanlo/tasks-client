import { FC } from 'react';
import { PlusIcon } from '@/shared/ui/icons';
import { Status } from '@/entities/task/ui';
import { useFilterStore } from '../model';
import { Dropdown } from '@/shared/ui';

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
        { type: 'button', label: <Status status="todo" />, onClick: () => handleStatusClick( 'todo' ) },
        { type: 'button', label: <Status status="inProgress" />, onClick: () => handleStatusClick( 'inProgress' ) },
        { type: 'button', label: <Status status="done" />, onClick: () => handleStatusClick( 'done' ) },
        { type: 'button', label: <Status status="cancelled" />, onClick: () => handleStatusClick( 'cancelled' ) },
        { type: 'button', label: <Status status="backlog" />, onClick: () => handleStatusClick( 'backlog' ) },
        { type: 'divider' },
        { type: 'button', label: 'Clear', onClick: () => handleStatusClick( '' ) }
      ]}
    />
  );
};

export default StatusFilter;