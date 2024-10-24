import { FilterWidget } from '@/widgets/task/ui';
import { FC } from 'react';

export const TaskPage: FC = () => {
  return (
    <div className="p-10">
      <FilterWidget />
    </div>
  );
};

export default TaskPage;
