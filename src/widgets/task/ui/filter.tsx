import { FC } from 'react';
import { PriorityFilter, QueryFilter, StatusFilter } from '@/features/task/ui';

const FilterWidget: FC = () => {
  return (
    <div className="flex items-center gap-3">
      <QueryFilter />
      <StatusFilter />
      <PriorityFilter />
    </div>
  );
};

export default FilterWidget;