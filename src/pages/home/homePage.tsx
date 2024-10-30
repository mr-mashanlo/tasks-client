import { FC } from 'react';

import { HeaderWidget } from '@/widgets/user/ui';

export const HomePage: FC = () => {
  return (
    <div className="p-10">
      <div>
        <HeaderWidget title="Welcome back!" subtitle="Here's a list of your tasks for this month!" />
      </div>
    </div>
  );
};

export default HomePage;
