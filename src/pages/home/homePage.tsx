import { FC } from 'react';
import { HeaderWidget } from '@/widgets/user/ui';
import { FilterWidget, TableWidget } from '@/widgets/task/ui';

export const HomePage: FC = () => {
  return (
    <div className="p-10">
      <div>
        <HeaderWidget title="Welcome back!" subtitle="Here's a list of your tasks for this month!" />
      </div>
      <div className="mt-8">
        <FilterWidget />
      </div>
      <div className="mt-8">
        <TableWidget />
      </div>
    </div>
  );
};

export default HomePage;
