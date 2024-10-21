import { FC } from 'react';
import { PriorityFilter, QueryInput, StatusFilter } from '@/features/task/ui';

const FilterWidget: FC = () => {
  return (
    <div className="flex items-center gap-3">
      <QueryInput />
      <StatusFilter />
      <PriorityFilter />
    </div>
  );
};

export default FilterWidget;