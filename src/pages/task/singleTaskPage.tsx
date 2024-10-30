import { FC } from 'react';

import { DataView } from '@/features/task/ui';

export const SingleTaskPage: FC = () => {
  return (
    <div className="p-28">
      <div className="max-w-[50rem] mx-auto">
        <DataView />
      </div>
    </div>
  );
};

export default SingleTaskPage;
