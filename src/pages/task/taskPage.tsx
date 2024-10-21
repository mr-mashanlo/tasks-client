import { FC } from 'react';
import { UserOptionsWidget } from '@/widgets/user/ui';
import { PriorityFilter, QueryInput, StatusFilter } from '@/features/task/ui';

export const TaskPage: FC = () => {
  return (
    <div className="p-10">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p>Here's a list of your tasks for this month!</p>
        </div>
        <UserOptionsWidget id="0" position="bottom" />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <QueryInput />
          <StatusFilter />
          <PriorityFilter />
        </div>
      </div>

    </div>
  );
};

export default TaskPage;
