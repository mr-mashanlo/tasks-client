import { FC } from 'react';
import { Priority } from '@/entities/task/ui';
import { useFilterStore } from '../model';
import { Dropdown, DropdownItem } from '@/shared/ui';
import { PriorityType } from '@/entities/task/model';

const PriorityFilter: FC = () => {

  const priority = useFilterStore( state => state.priority );
  const setPriority = useFilterStore( state => state.setPriority );

  const handlePriorityClick = ( priority: PriorityType | '' ) => {
    setPriority( priority );
  };

  return (
    <Dropdown
      positionX="left"
      positionY="bottom"
      button={<button className="min-w-[8.2rem] px-3 py-2 inline-flex items-center gap-3 rounded-md border border-dashed border-zinc-800">{priority ? <Priority priority={priority} /> : <Priority priority="empty" /> }</button>}
      items={[
        <DropdownItem type="button" label={<Priority priority="low" />} handleClick={() => handlePriorityClick( 'low' )} />,
        <DropdownItem type="button" label={<Priority priority="medium" />} handleClick={() => handlePriorityClick( 'medium' )} />,
        <DropdownItem type="button" label={<Priority priority="high" />} handleClick={() => handlePriorityClick( 'high' )} />,
        <DropdownItem type="divider" />,
        <DropdownItem type="button" label="Clear" handleClick={() => handlePriorityClick( '' )} />
      ]}
    />
  );
};

export default PriorityFilter;