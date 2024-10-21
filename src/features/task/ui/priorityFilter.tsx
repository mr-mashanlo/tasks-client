import { FC } from 'react';
import { PlusIcon } from '@/shared/ui/icons';
import { Priority } from '@/entities/task/ui';
import { useFilterStore } from '../model';
import { Dropdown } from '@/shared/ui';

const PriorityFilter: FC = () => {

  const priority = useFilterStore( state => state.priority );
  const setPriority = useFilterStore( state => state.setPriority );

  const handlePriorityClick = ( priority: 'low' | 'medium' | 'high' | '' ) => {
    setPriority( priority );
  };

  return (
    <Dropdown
      position="bottom"
      button={<button className="min-w-[8.2rem] px-3 py-2 inline-flex items-center gap-3 rounded-md border border-dashed border-zinc-800">{priority ? <Priority priority={priority} /> : <><PlusIcon /> <span>Priority</span></>}</button>}
      items={[
        { type: 'button', label: <Priority priority="low" />, onClick: () => handlePriorityClick( 'low' ) },
        { type: 'button', label: <Priority priority="medium" />, onClick: () => handlePriorityClick( 'medium' ) },
        { type: 'button', label: <Priority priority="high" />, onClick: () => handlePriorityClick( 'high' ) },
        { type: 'divider' },
        { type: 'button', label: 'Clear', onClick: () => handlePriorityClick( '' ) }
      ]}
    />
  );
};

export default PriorityFilter;