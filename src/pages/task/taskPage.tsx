import { FC } from 'react';

import { FilterWidget, TableWidget } from '@/widgets/task/ui';
import { HeaderWidget } from '@/widgets/user/ui';
import { LinkButton } from '@/shared/ui';

export const TaskPage: FC = () => {
  return (
    <div className="p-10">
      <div>
        <HeaderWidget title="Welcome back!" subtitle="Here's a list of your tasks for this month!" />
      </div>
      <div className="mt-8 flex items-center justify-between gap-3">
        <FilterWidget />
        <LinkButton display="bordered" theme="white" to="/task/create">Create task</LinkButton>
      </div>
      <div className="mt-8">
        <TableWidget />
      </div>
    </div>
  );
};

export default TaskPage;
