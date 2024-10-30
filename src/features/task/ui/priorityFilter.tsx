import { FC } from 'react';

import { PriorityType, useFilterStore } from '@/entities/task/model';
import { Priority } from '@/entities/task/ui';
import { Dropdown, DropdownItem } from '@/shared/ui';

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
      button={<button className="min-w-[8.2rem] px-3 py-2 inline-flex items-center gap-3 rounded-md border border-dashed border-zinc-800">{priority ? <Priority value={priority} /> : <Priority value="empty" /> }</button>}
      items={[
        <DropdownItem type="button" label={<Priority value="low" />} handleClick={() => handlePriorityClick( 'low' )} />,
        <DropdownItem type="button" label={<Priority value="medium" />} handleClick={() => handlePriorityClick( 'medium' )} />,
        <DropdownItem type="button" label={<Priority value="high" />} handleClick={() => handlePriorityClick( 'high' )} />,
        <DropdownItem type="divider" />,
        <DropdownItem type="button" label="Clear" handleClick={() => handlePriorityClick( '' )} />
      ]}
    />
  );
};

export default PriorityFilter;