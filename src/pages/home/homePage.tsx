import { FC } from 'react';

import { IntroWidget } from '@/widgets/task/ui';

export const HomePage: FC = () => {
  return (
    <div className="min-h-screen px-4 flex items-center justify-center">
      <IntroWidget />
    </div>
  );
};

export default HomePage;
